import express from "express";
import User from "../../models/User";
import bycript from "bcryptjs";
const router = express.Router();
import config from "config";
import jwt from "jsonwebtoken";

//@route    GET api/users
//@dec      Register new user
//@access   public
router.post("/", (req, res) => {
  const { name, email, password } = req.body;
  //Simple validation
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "Please Enter All fields" });
  }

  //Check Existing User
  User.findOne({ email }).then(user => {
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const newUser = new User({
      name,
      email,
      password
    });

    bycript.genSalt(10, (err, salt) => {
      bycript.hash(password, salt, (err, hash) => {
        if (err) {
          throw err;
        }
        //Update the new user password to the Hash.
        newUser.password = hash;
        newUser.save().then(user => {
          // Create a json token
          jwt.sign(
            { id: user.id }, // Embed the Id of the user in the token. to associate or attach token to user.
            config.get("JwtSecret"),
            {
              expiresIn: 3600 // expire the togen in one hour
            },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email
                }
              });
            }
          );
        });
      });
    });
  });
});

export = router;

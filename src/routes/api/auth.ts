import express from "express";
import User from "../../models/User";
import bycript from "bcryptjs";
const router = express.Router();
import config from "config";
import jwt from "jsonwebtoken";
import auth from "../../middleware/auth";

//@route    GET api/auth/user
//@dec      Get user data by token.
//@access   Private
router.get("/user", auth, (req, res) => {
  User.findById((req as any).jwtDecod.id)
    .select("-password") // Remove the password fro the selected user
    .then(user => res.json(user));
});

//@route    POST api/auth
//@dec      Register new user the user
//@access   Public
router.post("/", (req, res) => {
  const { email, password } = req.body;
  //Simple validation
  if (!email || !password) {
    return res.status(400).json({ msg: "Please Enter All fields" });
  }

  //Check Existing User
  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(400).json({ msg: "User does not exist" });
    }
    //Validate password
    bycript.compare(password, user.password).then(isMatch => {
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid Password" });
      }
      //Send the token and the user.
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

export = router;

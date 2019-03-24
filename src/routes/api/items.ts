import express from "express";
import Item from "../../models/Item";
const router = express.Router();

//@route    GET api/items
//@dec      Gets All Items
//@access   Public
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 }) // Sort items descending by date field
    .then(items => {
      res.json(items);
    });
});

//@route    POST api/items
//@dec      Saves an item to the database
//@access   Public
router.post("/", (req, res) => {
  // Validate request.
  if (!req.body.name) {
    return res.status(400).json({ msg: "name is required" });
  }
  var item = new Item({
    name: req.body.name
  });

  item.save().then(itemSaved => {
    return res.json(itemSaved);
  });
});
//@route    DELETE api/items/:id
//@dec      Deletes item to the database
//@access   Public
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(() => res.status(404).json({ success: false }));
});

export = router;

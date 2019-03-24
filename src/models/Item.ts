import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
// Get the mongoose model from the defined schema
let Item = mongoose.model("item", ItemSchema);
export = Item;

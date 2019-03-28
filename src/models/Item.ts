import mongoose from "mongoose";
const Schema = mongoose.Schema;

export interface IItem extends mongoose.Document {
  name: string;
}

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
let Item = mongoose.model<IItem>("item", ItemSchema);
export default Item;

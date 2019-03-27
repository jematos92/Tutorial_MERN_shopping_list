import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  name: string;
  email?: string;
  password?: string;
}

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  registerDate: {
    type: Date,
    default: Date.now
  }
});
// Get the mongoose model from the defined schema
const User = mongoose.model<IUser>("User", UserSchema);
export default User;

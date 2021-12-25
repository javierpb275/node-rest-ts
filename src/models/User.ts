import mongoose, { Schema, model } from "mongoose";

export interface User extends mongoose.Document {
  username: string;
  email: string;
  password: string;
}

const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

export default model<User>("User", UserSchema);

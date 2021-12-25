import mongoose, { Schema, model } from "mongoose";
import { Post } from "./Post";

export interface User extends mongoose.Document {
  username: string;
  email: string;
  password: string;
  posts: Post[];
}

const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

export default model<User>("User", UserSchema);

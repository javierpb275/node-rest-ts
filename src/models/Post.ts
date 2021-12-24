import mongoose, { Schema, model } from "mongoose";

export interface Post extends mongoose.Document {
  title: string;
  url: string;
  content: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true, unique: true, lowercase: true },
  content: { type: String, required: true },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

export default model<Post>("Post", PostSchema);

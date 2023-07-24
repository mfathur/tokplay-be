import mongoose from "mongoose";
import { CommentSchema } from "./comment.js";

const VideoSchema = new mongoose.Schema({
  thumbnailUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  merchant: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  comments: {
    type: [CommentSchema],
  },
});

export const Video = new mongoose.model("Video", VideoSchema);

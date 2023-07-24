import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  thumbnailUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  comments: {},
});

export const Video = new mongoose.model("Video", videoSchema);

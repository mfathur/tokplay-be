import express from "express";
import { VideoService } from "../service.js";
import { Video } from "../models/video.js";

const router = express.Router();

const postVideoCommentAction = (_videoService) => async (req, res, next) => {
  try {
    const {
      params: { videoId },
      body: { username, comment },
    } = req;

    await _videoService.insertComment(videoId, username, comment);

    res
      .status(201)
      .json({ status: "success", message: "comment successfully sent" });
  } catch (error) {
    next(error);
  }
};

export const postVideoComment = router.post(
  "/:videoId/comments",
  postVideoCommentAction(new VideoService(Video))
);

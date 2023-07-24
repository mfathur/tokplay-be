import express from "express";
import { VideoService } from "../service.js";
import { Video } from "../models/video.js";

const router = express.Router();

const getCommentsByVideoIdAction =
  (_videoService) => async (req, res, next) => {
    try {
      const { videoId } = req.params;

      const comments = await _videoService.getCommentsBy(videoId);

      res.status(200).json({
        status: "success",
        data: comments,
      });
    } catch (error) {
      next(error);
    }
  };

export const getCommentsByVideoId = router.get(
  "/:videoId/comments",
  getCommentsByVideoIdAction(new VideoService(Video))
);

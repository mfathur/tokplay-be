import express from "express";
import { VideoService } from "../service.js";
import { Video } from "../models/video.js";
import { checkPostCommentBodyRequest } from "../middleware.js";
import { checkRequestError } from "../../../utils/checkRequestError.js";
import { authenticateJWT } from "../../auth/middlewares/authenticateJWT.js";

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
  authenticateJWT,
  checkPostCommentBodyRequest(),
  checkRequestError,
  postVideoCommentAction(new VideoService(Video))
);

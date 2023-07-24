import express from "express";
import { VideoService } from "../service.js";
import { Video } from "../models/video.js";

const router = express.Router();

const getAllVideosAction = (_videoService) => async (req, res, next) => {
  try {
    const { keyword } = req.query;

    const data = await _videoService.getAllVideosBy(keyword);

    res.status(200).json({
      status: "success",
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllVideos = router.get(
  "/",
  getAllVideosAction(new VideoService(Video))
);

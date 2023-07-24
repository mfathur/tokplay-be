import express from "express";
import { getAllVideos } from "./get.allVideos.js";
import { getCommentsByVideoId } from "./get.videoComments.js";

const router = express.Router();

router.use(getAllVideos, getCommentsByVideoId);

export default router;

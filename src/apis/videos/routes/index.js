import express from "express";
import { getAllVideos } from "./get.allVideos.js";
import { getCommentsByVideoId } from "./get.videoComments.js";
import { postVideoComment } from "./post.videoComments.js";

const router = express.Router();

router.use(getAllVideos, getCommentsByVideoId, postVideoComment);

export default router;

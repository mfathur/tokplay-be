import express from "express";
import { getAllVideos } from "./get.allVideos.js";

const router = express.Router();

router.use(getAllVideos);

export default router;

import express from "express";
import { postLoginUser } from "./post.login.js";
import { postRegisterUser } from "./post.register.js";

const router = express.Router();

router.use(postLoginUser, postRegisterUser);

export default router;

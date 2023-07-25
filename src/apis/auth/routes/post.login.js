import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../model/user.js";
import { UserService } from "../service.js";
import { checkPostLoginUserBodyRequest } from "../middlewares/validationRules.js";
import { checkRequestError } from "../../../utils/checkRequestError.js";
import { UnauthorizedError } from "../../../utils/errors/UnauthorizedError.js";

const generateTokenBy = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: 86400, // 1 day
  });
};

const router = express.Router();

const postLoginUserAction = (_userService) => async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await _userService.getUserBy(email);

    const passwordValidity = await bcrypt.compare(password, user.password);

    if (passwordValidity === false) {
      throw new UnauthorizedError(
        "Authentication failed. Please check your email and password!"
      );
    }

    const token = generateTokenBy({ id: user.id });

    res.status(200).json({
      user: {
        email: user.email,
        username: user.username,
      },
      message: "Login successful",
      accessToken: token,
    });
  } catch (error) {
    next(error);
  }
};

export const postLoginUser = router.post(
  "/login",
  checkPostLoginUserBodyRequest(),
  checkRequestError,
  postLoginUserAction(new UserService(User))
);

import express from "express";
import { UserService } from "../service.js";
import { User } from "../model/user.js";
import { checkPostRegisterUserBodyRequest } from "../middlewares/validationRules.js";
import { checkRequestError } from "../../../utils/checkRequestError.js";

const router = express.Router();

const postRegisterUserAction = (_userService) => async (req, res, next) => {
  try {
    const user = { ...req.body };

    await _userService.insert(user);

    res.status(201).json({
      status: "success",
      message: "New user successfully registered",
    });
  } catch (error) {
    next(error);
  }
};

export const postRegisterUser = router.post(
  "/register",
  checkPostRegisterUserBodyRequest(),
  checkRequestError,
  postRegisterUserAction(new UserService(User))
);

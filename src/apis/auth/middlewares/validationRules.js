import { body } from "express-validator";

export const checkPostRegisterUserBodyRequest = () => {
  return [
    body("email")
      .exists()
      .withMessage("email is required")
      .bail()
      .notEmpty()
      .withMessage("email cannot be empty")
      .bail()
      .isEmail()
      .withMessage("Invalid email address"),
    body("password")
      .exists()
      .withMessage("password is required")
      .bail()
      .notEmpty()
      .withMessage("password cannot be empty")
      .bail()
      .isString()
      .withMessage("password type must be string")
      .bail()
      .isLength({ min: 8 })
      .withMessage("Password must be longer than 8 characters"),
    body("username")
      .exists()
      .withMessage("username is required")
      .bail()
      .notEmpty()
      .withMessage("username cannot be empty")
      .bail()
      .isString()
      .withMessage("username type must be string"),
  ];
};

export const checkPostLoginUserBodyRequest = () => {
  return [
    body("email")
      .exists()
      .withMessage("email is required")
      .bail()
      .notEmpty()
      .withMessage("email cannot be empty")
      .bail()
      .isEmail()
      .withMessage("Invalid email address"),
    body("password")
      .exists()
      .withMessage("password is required")
      .bail()
      .notEmpty()
      .withMessage("password cannot be empty")
      .bail()
      .isString()
      .withMessage("password type must be string")
      .bail(),
  ];
};

import { body } from "express-validator";

export const checkPostCommentBodyRequest = () => {
  return [
    body("username")
      .exists()
      .withMessage("username is required")
      .bail()
      .notEmpty()
      .withMessage("username cannot be empty")
      .bail()
      .isString()
      .withMessage("username type must be string"),
    body("comment")
      .exists()
      .withMessage("comment is required")
      .bail()
      .notEmpty()
      .withMessage("comment cannot be empty")
      .bail()
      .isString()
      .withMessage("comment type must be string")
      .escape(),
  ];
};

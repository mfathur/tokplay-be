import { body } from "express-validator";

export const checkPostCommentBodyRequest = () => {
  return [
    body("username")
      .exists()
      .withMessage("username is required")
      .bail()
      .isString()
      .withMessage("username type must be string"),
    body("comment")
      .exists()
      .withMessage("comment is required")
      .bail()
      .isString()
      .withMessage("comment type must be string")
      .escape(),
  ];
};

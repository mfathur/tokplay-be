import { validationResult } from "express-validator";

export const checkRequestError = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors = [];
  errors
    .array()
    .map((error) => extractedErrors.push({ [error.path]: error.msg }));

  res.statusCode = 422;
  return res.json({ errors: extractedErrors });
};

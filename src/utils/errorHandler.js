export const errorHandler = (err, req, res, next) => {
  const errorCode = err.statusCode || 500;
  const errorMessage =
    errorCode === 500
      ? "Internal server error"
      : err.message || "Something went wrong";

  return res.status(errorCode).json({
    status: "fail",
    message: errorMessage,
  });
};

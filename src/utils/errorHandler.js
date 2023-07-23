export const errorHandler = (err, req, res, next) => {
  const errorCode = err.statusCode || 500;
  const errorMessage = err.message || "Something went wrong";

  return res.status(errorCode).json({
    status: "fail",
    message: errorMessage,
  });
};

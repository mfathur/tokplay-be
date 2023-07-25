import jwt from "jsonwebtoken";
import { UnauthorizedError } from "../../../utils/errors/UnauthorizedError.js";
import { ForbiddenError } from "../../../utils/errors/ForbiddenError.js";

export const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  try {
    if (!token) {
      throw new UnauthorizedError("Access Denied");
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        throw new ForbiddenError(
          "You are not authorized to access this resource. Please log in again to continue. "
        );
      }
      next();
    });
  } catch (error) {
    next(error);
  }
};

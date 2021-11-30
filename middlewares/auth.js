import catchAsyncErrors from "./catchAsyncErrors";
import ErrorHandler from "../utils/errorHandler";
import { getSession } from "next-auth/client";

const isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const session = await getSession({ req });

  if (!session) {
    return next(new ErrorHandler("Login first to access this resource", 401));
  }

  req.user = session.user;
  console.log("req user", req.user);

  next();
});

// Middleware accept a function with 3 arguments (req, res,next)

// Handling user roles
const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role(${req.user.role}) is not allowed to access this resource`,
          403
        )
      );
    }
    next();
  };
};

export { isAuthenticatedUser, authorizeRoles };

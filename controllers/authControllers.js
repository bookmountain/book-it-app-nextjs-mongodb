import User from "../models/user";
import ErrorHandler from "../utils/errorHandler";
import catchAsyncErrors from "../middlewares/catchAsyncErrors";

// Register user => /api/auth/register
const registerUser = catchAsyncErrors(async (req, res) => {
  const { name, password, email } = req.body;
  const user = await User.create({
    name,
    password,
    email,
    avatar: {
      public_id: "PUBLIC_ID",
      url: "URL",
    },
  });

  res.status(200).json({
    success: true,
    message: "Account Register Successfully",
  });
});

export { registerUser };

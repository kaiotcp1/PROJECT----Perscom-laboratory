const catchAsync = require("../utils/catchAsync");
const AuthService = require("./../services/authServices");
const authService = new AuthService();

const authMiddleware = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  const currentUser = await authService.verifyToken(token);

  req.userId = currentUser._id;
  next();
});

module.exports = authMiddleware;

const User = require("../models/adminModel");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const catchAsync = require("../utils/catchAsync");
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};
exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
    });

    const token = signToken(newUser._id);
    res.status(201).json({
      status: "success",
      token,
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err,
    });
  }
};
exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username }).select("+password");

    const isCorrect = await user.correctPassword(password, user.password);

    if (!user || !isCorrect) {
      res.status(404).json({
        status: "errr",
        message: "incorrect email or password",
      });
    }
    //Check Email && password correct
    if (!username || !password) {
      res.status(400).json({
        status: "failed",
        message: "provide password and username",
      });
    }

    //send token to client
    const token = signToken(user._id);
    res.status(200).json({
      status: "success",
      token,
    });
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: err,
    });
  }
};
exports.protect = catchAsync(async (req, res, next) => {
  //getting token and check
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
      res.status(401).json({
        status: "errr",
        message: "you're not logged in? Please log in to get access",
      });
    }
    //varification token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    //check whether user still exists?
    const currentUser = await User.findById(decoded.id)
    if (!currentUser) {
      res.status(401).json({
        status: "error",
        message: "user do not exist",
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err,
    });
  }

  //
  next();
});

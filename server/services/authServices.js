const express = require("express");
const User = require("../models/userModel");
const AppError = require("./../utils/AppError");
const jwt = require("jsonwebtoken");

class AuthService {
  async createUser(userData) {
    if (!userData) {
      throw new AppError("Please provide email, password and password confirm !", 400);
    }

    const { name, email, password, passwordConfirm } = userData;

    const newUser = await User.create({
      name,
      email,
      password,
      passwordConfirm,
    });
    return newUser;
  }

  async loginUser(userData) {
    const { email, password } = userData;

    if (!email || !password) {
      throw new AppError("Please provide email and password !", 400);
    }

    const user = await User.findOne({ email: email }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password))) {
      throw new AppError("Incorrect email or password !", 401);
    }

    user.password = undefined;

    const token = user.signToken(user._id);
    return {token, user};
  }

  async verifyToken(token) {
    if (!token) {
      throw new AppError("Unauthorized, please make a login", 401);
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const currentUser = await User.findById(decoded.id);

    if (!currentUser) {
      throw new AppError("The user token not exist", 401);
    }

    return currentUser;
  }
}

module.exports = AuthService;

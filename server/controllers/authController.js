const User = require("../models/userModel");
const express = require("express");
const AuthService = require("../services/authServices");
const authService = new AuthService();
const catchAsync = require("./../utils/catchAsync");

exports.signup = catchAsync(async (req, res) => {
  const userData = req.body;
  const newUser = await authService.createUser(userData);

  newUser.password = undefined

  res.status(201).json({
    status: "success",
    message: "User created successfully",
    newUser,
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const userData = req.body;
  const {token, user} = await authService.loginUser(userData);

  res.status(200).json({
    status: "success",
    token,
    user
  });
});

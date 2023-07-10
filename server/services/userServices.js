const express = require("express");
const User = require("../models/userModel");
const AppError = require("../utils/AppError");

class UserService {
  async getAllUsers() {
    const users = await User.find();
    console.log(users);

    if (!users) {
      throw new AppError("Users not found", 404);
    }

    return users;
  };

  async getUserById(userId) {
    const user = await User.findById(userId);

    if (!user) {
      throw new AppError("User not found", 404);
    }

    return user;
  };

  async updateUser(id, data) {
    const user = User.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true, // Run DB model validators again
    });

      if(!user) {
        throw new AppError('No User found with that ID', 404)
      }

      return user;
  };
}

module.exports = UserService;

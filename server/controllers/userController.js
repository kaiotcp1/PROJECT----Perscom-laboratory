const express = require("express");
const UserService = require("./../services/userServices");
const userService = new UserService();
const catchAsync = require("./../utils/catchAsync");

exports.getAllUsers = catchAsync(async (req, res) => {
    const users = await userService.getAllUsers();
    res.status(200).json({
        status: 'success',
        data: {
            users
        }
    })
});

exports.getOneUser = catchAsync(async (req, res) => {
    console.log("REQ.USER" + req.userId)
    const user = await userService.getUserById(req.userId)
    res.status(200).json({
        status: 'success',
        data: {
            user
        }
    })
});

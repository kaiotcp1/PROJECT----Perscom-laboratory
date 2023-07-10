const authController = require("./../controllers/authController");
const authMiddleware = require("./../middlewares/authMiddleware");
const userController = require("./../controllers/userController");
const express = require("express");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);


module.exports = router;

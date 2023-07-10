const authMiddleware = require("../middlewares/authMiddleware");
const userController = require("../controllers/userController");
const express = require("express");

const router = express.Router();

router.use(authMiddleware);
router.get("/getall", userController.getAllUsers);

router.route("/current-user").get(userController.getOneUser);

module.exports = router;

const squadController = require("./../controllers/squadController");
const authMiddleware = require("./../middlewares/authMiddleware");
const express = require("express");

const router = express.Router();

router.use(authMiddleware);

router.route("/").get(squadController.getAllSquads);

router.route("/:id")
.post(squadController.createSquad)
.get(squadController.getOneSquad)
.patch(squadController.updateSquad)
.delete(squadController.deleteSquad);


module.exports = router;

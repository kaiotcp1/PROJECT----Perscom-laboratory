const soldierController = require("./../controllers/soldierController");
const authMiddleware = require("./../middlewares/authMiddleware");
const express = require("express");

const router = express.Router();

router.use(authMiddleware);

router
  .route("/")
  .get(soldierController.getAllSoldiers);

router
  .route("/:id")
  .post(soldierController.createSoldier)
  .get(soldierController.getOneSoldier)
  .patch(soldierController.updateSoldier)
  .delete(soldierController.deleteSoldier);

module.exports = router;

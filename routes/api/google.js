const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// Routes to "/api/google"
router
  .route("/")
  .get(googleController.findAll);

module.exports = router;

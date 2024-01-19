const express = require("express");
const router = express.Router();

const authenticate = require("../middleware/authenticate.js");
const ratingController = require("../Controller/rating.controller.js");

router.post("/create", authenticate, ratingController.createRating);
router.put("/product/:productId", authenticate, ratingController.getAllRatings);

module.exports = router;

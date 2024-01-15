const express = require("express");
const router = express.Router();

// import controller
const { feedback, getStationFeed, getAverageRatings, getDistrictSummary } = require("../controllers/feedback");

//define API routes
router.post("/feedback", feedback);
router.get("/station/:id", getStationFeed);
router.get("/district/:id", getAverageRatings);
router.get("/state/summary", getDistrictSummary);
module.exports = router;
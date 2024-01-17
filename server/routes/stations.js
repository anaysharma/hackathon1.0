const express = require("express");
const router = express.Router();

// import controller
const { register } = require("../controllers/station");

//define API routes
router.post("/station/register", register);

module.exports = router;
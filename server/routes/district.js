const express = require("express");
const router = express.Router();

// import controller
const { register } = require("../controllers/district");

//define API routes
router.post("/district/register", register);

module.exports = router;
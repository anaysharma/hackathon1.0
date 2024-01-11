const express = require("express");
require("dotenv").config();

const server = express();
const connectDB = require("./config/connectDB.js");
const userRoute = require("./routes/user.js");

connectDB();

server.use(express.json());

server.use("/api/v1/user", userRoute);

const PORT = process.env.PORT || 5050;

server.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`);
});

// ====================================

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

server.use(cors(corsOptions));

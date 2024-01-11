const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_url);
    console.log("Connected");
  } catch (error) {
    console.error(error);
    return error;
  }
};

module.exports = connectDB;

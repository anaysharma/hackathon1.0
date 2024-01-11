const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name field is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name field is required"],
  },
  email: {
    type: String,
    required: [true, "Email field is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password field is required"],
  },
  mobile: {
    type: String,
    required: [true, "Mobile field is required"],
  },
  address: {
    type: String,
    required: [true, "Address field is required"],
  },
  aadhar: {
    type: String,
    required: [true, "Aadhar field is required"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

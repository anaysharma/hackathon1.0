const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  User: {
    // Unique identifier for the submitter
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  policeStation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "policeStation",
  },
  questions: {
    type: [Number],
    required: true,
  },

  // question8: {
  //   type: Number, required: true
  // },
  // question9: {
  //   type: Number, required: true
  // },
  query: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("feedback", feedbackSchema);

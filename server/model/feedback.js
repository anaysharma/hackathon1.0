const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema(
  {
    User: {  // Unique identifier for the submitter
      type: mongoose.Schema.Types.ObjectId,
      ref:"User",
    },
    policeStation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "policeStation",
    },
    question1: {
      type: Number, required: true
    },
    question2: {
      type: Number, required: true
    },
    // question3: {
    //   type: Number, required: true
    // },
    // question4: {
    //   type: Number, required: true
    // },
    // question5: {
    //   type: Number, required: true
    // },
    // question6: {
    //   type: Number, required: true
    // },
    // question7: {
    //   type: Number, required: true
    // },
    // question8: {
    //   type: Number, required: true
    // },
    // question9: {
    //   type: Number, required: true
    // },
    // question10: {
    //   type: Number, required: true
    // },
    date: {
      type: Date, default: Date.now
    },
  }
);

module.exports = mongoose.model("feedback", feedbackSchema);



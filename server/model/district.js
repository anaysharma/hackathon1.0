const mongoose = require('mongoose');

const districtSchema = new mongoose.Schema(
  {
    name: {  // station name
        type: String,
        required: true,
    },
    headName: { // user from station
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    stations: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"policeStation",
        }
    ],
  }
);

module.exports = mongoose.model("district", districtSchema);
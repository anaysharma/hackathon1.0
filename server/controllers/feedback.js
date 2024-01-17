// import the model

const feedback = require("../model/feedback");
const User = require("../model/users");
const policeStation = require("../model/policeStation");

//define route handler

exports.feedback = async (req, res) => {
    try {
        // extract title & description from request body
      const { users, stations, q1, q2, q3, q4, q5, q6, q7, query } = req.body;
      // create a new feedback obj 
      const feed = new feedback({ users, stations, q1, q2, q3, q4, q5, q6, q7, query });
        // and insert into db
        const savedFeed = await feed.save();
        //find the user by id and add the new feedback to its feedbacks array
        
        const updatedUser = await User.findByIdAndUpdate(users, { $push: { feedbacks: savedFeed._id } }, { new: true })
            .populate("feedbacks")
            .exec();
        
        const updatedStation = await policeStation.findByIdAndUpdate(stations, { $push: { feedbacks: savedFeed._id } }, { new: true })
            .populate("feedbacks")
            .exec();
        
        // send a json response with a success flag
        res.json({
            User: updatedUser,
            policeStation: updatedStation,
            success: true,
            data: savedFeed,
            message: 'Entry Created Successfully'
        });
    }
    catch (err) {
        console.log("issue aa gya");
        console.log("submission nhi ho paaya",err);
        console.error(error.message);
        res.status(500)
        .json({
                success: false,
                data: "internal server error",
                message:err.message,
        })
    }
}
// =========================================================================================================
// for getting all the feedbacks for a police station


exports.getStationFeed = async (req, res) => {
    try {
        const id = req.params.id;
        const stationFeeds = await feedback.find({ "stations": id });
        
        if (!stationFeeds) {
            return res.status(404).json({
              success: false,
              message:"No Data Found with the given id",
            })
        }
        res.status(200).json({
            success: true,
            data: stationFeeds,
            message:"all feedbacks successfully fetched",
        })
    }
    catch (err) {
        console.log("issue aa gya");
        console.log("Feedback fetch nhi ho paaya",err);
        console.error(error.message);
        res.status(500)
        .json({
                success: false,
                data: "internal server error",
                message:err.message,
        })
    }
}


// =========================================================================================================//
// for getting average rating of every station on a district


exports.getAverageRatings = async (req, res) => {
    try {
      const policeStations = await feedback.aggregate([
        {
          $group: {
            _id: "${stations}",
            averageQuestion1: { $avg: "$q1" },
            averageQuestion2: { $avg: "$q2" },
            averageQuestion3: { $avg: "$q3" },
            averageQuestion4: { $avg: "$q4" },
            averageQuestion5: { $avg: "$q5" },
            averageQuestion6: { $avg: "$q6" },
            averageQuestion7: { $avg: "$q7" },
          },
        },
      ]);
  
      res.status(200).json({
        success: true,
        data: policeStations,
        message: 'Average Ratings Calculated Successfully',
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({
        success: false,
        data: "Internal Server Error",
        message: err.message,
      });
    }
};
  

// ===========================================================================================================//
// full state summary district - wise for state

exports.getDistrictSummary = async (req, res) => {
  try {
    const districtSummaries = await feedback.aggregate([
      {
        $group: {
          _id: "$district",
          averageQuestion1: { $avg: "$q1" },
          averageQuestion2: { $avg: "$q2" },
          averageQuestion3: { $avg: "$q3" },
          averageQuestion4: { $avg: "$q4" },
          averageQuestion5: { $avg: "$q5" },
          averageQuestion6: { $avg: "$q6" },
          averageQuestion7: { $avg: "$q7" },
        },
      },
    ]);

    res.status(200).json({
      success: true,
      data: districtSummaries,
      message: 'District Summaries Calculated Successfully',
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      success: false,
      data: null,
      message: 'Internal Server Error',
    });
  }
};

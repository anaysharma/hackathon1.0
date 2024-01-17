// import the model

const User = require("../model/users");
const District = require("../model/district");
const Complain = require("../model/complains");

//define route handler

exports.register = async (req, res) => {
    try {
        // extract title & description from request body
        const {name, user} = req.body;
        // create a new feedback obj 
        const district = new District({ name, user});
        // and insert into db
        const savedDistrict = await district.save();
        
        // send a json response with a success flag
        res.json({            
            success: true,
            data: savedDistrict,
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

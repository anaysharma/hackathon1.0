const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    //Password Hashing
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);

    //Creation of user
    const newUser = await User.create({
      ...req?.body,
      password: hash,
    });

    // generate jwt
    const token = await jwt.sign({ id: newUser._id }, "Secretkey");

    res.status(201).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json(`Error in user registration ${error}`);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isUser = await User.findOne({ email: email });
    if (!isUser) return res.status(400).json("Email not registered");
    const isMatch = await bcrypt.compare(password, isUser.password);
    if (!isMatch) return res.status(401).json("Wrong Credential");
    const token = await jwt.sign({ id: isUser._id }, process.env.SECRET_KEY);
    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json(`Error in user login ${error}`);
  }
};


module.exports = { register, login };
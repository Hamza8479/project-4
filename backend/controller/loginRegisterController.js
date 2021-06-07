const user = require("../models/userModel");
const loginController = async (req, res) => {
  try {
    const { email, pass } = req.body;
    const userExists = await user.findOne({ email, pass });
    userExists
      ? res.status(200).json({ message: "Login successfull!" })
      : res.status(404).json({ message: "Invalid Details" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Invalid Details" });
  }
};
const registerController = async (req, res) => {
  try {
    const { email, pass, cPass } = req.body;
    const emailExists = await user.findOne({ email });
    if (!emailExists && pass === cPass) {
      // const alluser = await user.find({});
      const userCreated = await user.create(req.body);
      res.status(200).json({ status: "success", data: [userCreated] });
    } else {
      res.status(400).json({
        message:
          "email already exists try another one or Password aren't matching",
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      error: error.message,
    });
  }
};
module.exports = { loginController, registerController };

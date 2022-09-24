const UserData = require("../Model/usersSchema");

const signup = async (req, res) => {
  try {
    const { emailId, password } = req.body;

    const findUser = await UserData.findOne({ emailId });

    if (findUser?.emailId === req?.body?.emailId) {
      return res.status(200).json({
        status: 200,
        data: "User Already Exist with same email-Id",
      });
    } else {
      const userData = new UserData({ ...req.body });
      await userData.save();

      return res.status(200).json({
        status: 200,
        data: "User Create Successful",
      });
    }
  } catch (error) {
    console.log("error", error.message);
  }
};

const signIn = async (req, res) => {
  try {
    const { emailId, password } = req.body;

    const findUser = await UserData.findOne({ emailId: emailId });
    console.log("findUser", findUser);
    if (findUser) {
      if (findUser.password === password)
        return res.status(200).json({
          status: 200,
          data: "SignIn Successful",
          info: emailId,
        });
      else {
        return res.status(200).json({
          status: 200,
          data: "Wrong Password",
        });
      }
    } else {
      return res.status(200).json({
        status: 200,
        data: "No User Exist",
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: 500,
      data: error.message,
    });
  }
};

module.exports = { signup, signIn };

const User = require("../models/userModel");
const bcrypt = require("bcrypt");

module.exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const usernameCheck = await User.findOne({ username: username });
    if (usernameCheck)
      return res.json({ msg: "Username already Exist", status: false });
    const emailCheck = await User.findOne({ email: email });
    if (emailCheck)
      return res.json({ msg: "Email already Exist", status: false });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    return res.json({ status: true, user });
  } catch (error) {
    next(err);
  }
};

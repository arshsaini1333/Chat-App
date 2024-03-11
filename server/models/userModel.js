const mongoose = require("mongoose");

const userScheema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 5,
    unique: true,
    max: 20,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 20,
  },
  isAvatarImageSet: {
    type: Boolean,
    default: false,
  },
  avatarImag: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("User", userScheema);

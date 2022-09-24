const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    fullName: { type: String },
    emailId: { type: String },
    phoneNumber: { type: String },
    password: { type: String },
    OTP: {
      type: String, expires: '1m',
      index: true
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("user", UserSchema);

const mongoose = require("mongoose");
require("dotenv").config();
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    pass: {
      type: String,
      required: true,
    },
    cPass: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const user = mongoose.model("user", userSchema, "users");
module.exports = user;

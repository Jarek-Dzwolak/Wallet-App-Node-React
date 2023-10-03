const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new mongoose.Schema({
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  fristName: {
    type: String,
    required: [true, "Name is required"],
  },
});
const User = mongoose.model("User", usersSchema);

module.exports = User;

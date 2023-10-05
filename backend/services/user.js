const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  firstName: {
    type: String,
    required: [true, "Name is required"],
  },
  token: {
    type: String,
    default: null,
  }
});
const User = mongoose.model("User", usersSchema);

module.exports = User;

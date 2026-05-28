const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name can't be blank"],
    minlength: 5,
    maxlength: 50,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email can't be blank"],
    validate: {
      validator: validator.isEmail,
      message: "Please enter valid Email",
    },
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minlength: 5,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user"
  },
});

module.exports = mongoose.model("User", UserSchema);

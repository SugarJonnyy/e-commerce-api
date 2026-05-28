const User = require("../models/user");
const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("../errors/custom-api");
const { BadRequestError } = require("../errors");

const register = async (req, res) => {
  const { email, name, password } = req.body;
  const emailAlreadyExists = await User.findOne({ email });
  if (emailAlreadyExists) {
    throw new BadRequestError("Email already exists");
  }

  // first registered acc is admin
  const isFirstAcc = (await User.countDocuments({})) === 0;
  const role = isFirstAcc ? "admin" : "user";
  console.log({ name, email, password, role });
  const user = await User.create({ name, email, password, role });
  res.status(StatusCodes.CREATED).json({ user });
};
const login = async (req, res) => {
  res.send("loging in");
};
const logout = async (req, res) => {
  res.send("logging out");
};

module.exports = {
  register,
  login,
  logout,
};

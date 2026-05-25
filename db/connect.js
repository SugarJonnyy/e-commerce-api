const mongoose = require('mongoose');

const connectDB = (url) => {
  console.log("connect to db...");
  return mongoose.connect(url);
};

module.exports = connectDB;

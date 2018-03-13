const express = require("express");
const app = express();


const checkingIn = app.use((req, res, next) => {
  console.log("Checkin in on you bb")
  next();
});

module.exports = checkingIn;

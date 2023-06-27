const express = require("express");
const excercise2Controller = require("../controllers/excercise2");
const excercise2Middelware = require("../middlewares/excercise2");

const excercise2 = express.Router();

excercise2.post("/excercise2", excercise2Middelware, (req, res) => {
  const { data } = req.body;

  console.log(excercise2Controller(data));

  return res.status(200).send(excercise2Controller(data));
});

module.exports = excercise2;

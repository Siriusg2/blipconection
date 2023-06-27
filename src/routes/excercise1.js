const express = require("express");
const { excercise1Controller } = require("../controllers/excercise1");

const excercise1 = express.Router();

excercise1.post("/excercise1", (req, res) => {
  const { data } = req.body;
  console.log(excercise1Controller(data));
  const response = excercise1Controller(data);
  return res.status(200).send(response);
});

module.exports = excercise1;

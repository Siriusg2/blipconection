const excercise1 = require("./excercise1");
const excercise2 = require("./excercise2");

const express = require("express");

const router = express.Router();

router.use("/", excercise1);
router.use("/", excercise2);
module.exports = router;

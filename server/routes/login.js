const express = require("express");
const router = express.Router();
require("dotenv").config();
const { isAuth, loginAuth } = require("../middleware/auth");
router.post("/", loginAuth, async (req, res) => {});
module.exports = router;
//to do: get frontend jokes and diss json
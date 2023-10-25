const express = require("express");
const router = express.Router();
const { signupAuth } = require("../middleware/auth");
router.get("/", (req, res) => {
  res.send("done");
});
router.post("/", signupAuth, (req, res) => {});
module.exports = router;

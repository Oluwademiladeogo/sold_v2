const express = require("express");
const router = express.Router();
const getCardData = require("../helpers/getCardData");
router.get("/", async(req, res) => {
  res.setHeader("Content-Type", "application/json");
  const cardData = await getCardData()
  res.json(cardData);
});
module.exports = router;

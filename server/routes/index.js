const express = require("express");
const router = express.Router();
const getCardData = require("../helpers/getCardData");
router.get("/", async(req, res) => {
  res.setHeader("Content-Type", "application/json");
  const cardData = await getCardData()
  const response = {
          Status: 200,
          items: cardData.rows    
  }
  res.json(response);
});
module.exports = router;

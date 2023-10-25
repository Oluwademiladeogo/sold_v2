require("dotenv").config();
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  if (!res.cookie.authToken) return res.json("No response");
  const token = res.cookie.authToken;
  const response = await jwt.verfy(token, process.env.JWT_SECRET);
  if (!response.ok) return res.json("invalid token");
  res.json({
    name: response.name,
    email: response.email,
  });
});

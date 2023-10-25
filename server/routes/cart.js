const express = require("express");
const router = express.Router();
const { cartData, cartInsert } = require("../helpers/cartHandler");
router.get("/", cartData, (req, res, next) => {});
router.post("/", cartInsert, (req, res) => {});
module.exports = router;

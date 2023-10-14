const express = require("express")
const router = express.Router()
const getCartData = require("../helpers/getCartData")
router.get("/", async(req, res)=>{
    //get token from user
    const data = await getCartData("token");
    res.json(data)
})
module.exports = router
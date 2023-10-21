const express = require("express")
const router = express.Router()
require("dotenv").config()
const {isAuth, loginAuth} = require("../middleware/auth")
const getLoginInfo = require("../helpers/getLoginInfo")
router.post("/", loginAuth, async(req, res)=>{
    // const loginInfo = await getLoginInfo("token")
    // res.json(loginInfo)
})
module.exports = router; 
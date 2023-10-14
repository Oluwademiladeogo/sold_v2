const express = require("express")
const router = express.Router()
const getLoginInfo = require("../helpers/getLoginInfo")
router.get("/", async(req, res)=>{
    const loginInfo = await getLoginInfo("token")
    res.json(loginInfo)
})
module.exports = router;
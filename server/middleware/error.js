module.exports = (err, req, res, next)=>{
    console.log(err.message)
    res.json("An error happened, please try again")
}

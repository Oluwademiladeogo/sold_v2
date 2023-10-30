require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userschema = require("../models/userschema");
const { isUser, insertUser, signupUser } = require("./user");
const signupAuth = async (req, res, next) => {
  //Validate result from frontend
  if (req.body.name && req.body.email && req.body.password) {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    //joi validate
    const { error } = userschema.validate({
      name: name,
      email: email,
      password: password,
    });
    if (error) return res.status(400).json(error.message);
    //check status user already exists
    isUser(email)
    //check for response
    const salt = await bcrypt.genSalt(13);
    //store salt
    password = await bcrypt.hash(req.body.password, salt);
    //insert values
    insertUser(name, email, password)
  } else {
    return res.json("one or more fields are empty");
  }
  next();
};

const loginAuth = async (req, res, next) => {
  // new jwt token
  //if authtoken and hasnt expired, redirect immediately
  if (req.body.email && req.body.password) {
    const email = req.body.email;
    let password = req.body.password;
    //check if req.cookies.authToken then try and check if its expired, if exp, revoke then continue. try the rotating token login
    //   jwt.verify(req.cookies.authToken, PROCESS.ENV.JWT_SECRET);
    if (!req.cookies.authToken) {
      try {
       signupUser(email, password)
      } catch (error) {
        res.json("Invalid Email or password");
      }
    } else {
      res.json("User already logged in");
    }

  } else return res.json("Wrong input");
  next();
};

module.exports = { signupAuth, loginAuth};
//do doc

require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../db");
const userschema = require("../models/userschema");
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
    await pool.query(
      "SELECT * FROM users where email= $1",
      [email],
      async (error, results) => {
        if (results.rows.length > 0)
          return res.status(409).send("User already exists");
        if (error) return res.status().send("Error querying db");
      }
    );
    //check for response
    const salt = await bcrypt.genSalt(13);
    //store salt
    password = await bcrypt.hash(req.body.password, salt);
    //insert values
    await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
      [name, email, password],
      (err, results) => {
        if (err) return res.send(err.message);
        else return res.redirect("/login");
      }
    );
  } else {
    console.log("one of more fields are empty");
    return res.json("one or more fields are empty");
  }
  next();
};



const isAuth = async (req, res) => {
  if (!req.cookies.authToken) {
    return res.send("Not registered");
  } else res.send("User registered");
  next();
  // jwt.verify(req.cookies.authToken, PROCESS.ENV.JWT_SECRET);
  //   if !auth next if auth throw new error, user already logged in
};


const loginAuth = async (req, res, next) => {
  // new jwt token
  if (req.body.email && req.body.password) {
    const email = req.body.email;
    let password = req.body.password;
    //check if req.cookies.authToken then try and check if its expired, if exp, revoke then continue. try the rotating token login
    //   jwt.verify(req.cookies.authToken, PROCESS.ENV.JWT_SECRET);
    if (!req.cookies.authToken) {
      try {
        await pool.query(
          "SELECT name, email, password FROM users where email=$1",
          [email],
          (err, results) => {
            if (err) return res.json("Error querying db", err);
            const user = results.rows;
            console.log(user);
            if (user[0]) {
              if (user[0].email === email) {
                //validate password
                bcrypt.compare(
                  password,
                  user[0].password,
                  async (err, result) => {
                    if (result) {
                      console.log("no error");
                      const payload = {
                        name: user.name,
                        email: user.email,
                        exp: (Date.now() / 1000) * 60 * 60 * 24 * 2, //2 days
                      };
                      const token = await jwt.sign(
                        payload,
                        process.env.JWT_SECRET
                      );
                      res.cookie.authToken = token;
                      console.log(res.cookie.authToken);
                      return res.redirect("/");
                    } else
                      res.json({
                        message: "passwords don't match",
                      });
                  }
                );
              }
            }
            else{
              res.json("Invalid email or password")
            }
          }
        );
      } catch (error) {
        res.json("Invalid Email or password");
      }
    } else {
      res.json("User already logged in");
    }

    next();
  } else return res.json("Wrong input");
};

module.exports = { signupAuth, loginAuth, isAuth };
//can you add ci/cd to your resume? or add to the what you learnt about sold with github actions

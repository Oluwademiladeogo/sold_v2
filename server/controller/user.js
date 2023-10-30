const pool = require("../db");
const { compareLogin } = require("../helper");
const isUser = async(email)=>{
    await pool.query(
        "SELECT * FROM users where email= $1",
        [email],
        async (error, results) => {
          if (results.rows[0])
            return res.status(409).send("User already exists");
          if (error) return res.status().send("Error querying db");
        }
      );
}
const insertUser = async(name, email, password)=>{
    await pool.query(
        "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
        [name, email, password],
        (err, results) => {
          if (err) return res.send(err.message);
          else return res.redirect("/login");
        }
      );
}
const signupUser = async(email, password)=>{
  await pool.query(
    "SELECT name, email, password FROM users where email=$1",
    [email],
    (err, results) => {
      if (err) return res.json("Error querying db", err);
      const user = results.rows;
      if (user[0]) {
        if (user[0].email === email) {
          //validate password
         compareLogin(password, user[0].password)
        }
      } else {
        res.json("Invalid email or password");
      }
    }
  );
}
module.exports = {isUser, insertUser, signupUser}
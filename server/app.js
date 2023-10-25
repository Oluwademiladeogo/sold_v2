require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
// const corsOptions = {
//     origin: "*"
// }
const cartCors = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // Allow requests from this specific origin
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next()
  };
  
// Apply the custom CORS middleware to the /cart route
  app.use("/cart", cartCors);
  
app.use(cors());
app.use(express.json());
const cookieParser = require("cookie-parser")
app.use(cookieParser())
//using classes and controllers soon
app.use("/", (require("./routes/index")))
app.use("/login", require("./routes/login"))
app.use("/signup", require("./routes/signup"))
app.use("/cart", require("./routes/cart"))

module.exports = app
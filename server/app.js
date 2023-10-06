require("dotenv").config();
const express = require("express");
const app = express();
//using classes and controllers soon
app.get("/", (req, res) => {
  res.send("awaiting");
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  if (process.env.NODE_ENV) console.log(`server listening on port ${port}`);
  console.log("done");
});

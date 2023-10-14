require("dotenv").config();
const http = require("http");
const app = require("./app");
const server = http.createServer(app);
const port = process.env.PORT || 3000;
const startServer = () => {
  server.listen(port, () => {
    if (process.env.NODE_ENV === "development")
      console.log(`Server listening on port ${port}`);
  });
};
startServer();

//requiring data before server starts
// require("dotenv").config();
// const http = require("http");
// const app = require("./app");
// const server = http.createServer(app);
// const getCardData = require("./helpers/getCardData")
// const port = process.env.PORT || 3000;
// let cardData = {}
// const startServer = async() => {
//     const cardData =  await getCardData()
//   server.listen(port, () => {
//     if (process.env.NODE_ENV === "development")
//       console.log(`Server listening on port ${port}`);
//     });
//     return JSON.stringify(cardData)
// };
// const data = startServer()
// module.exports = data
// console.log(cardData)
// console.log(data)

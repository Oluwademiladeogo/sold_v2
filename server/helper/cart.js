const { getCart, addCart } = require("../controller/cart");
const cartData = async (req, res, next) => {
  try {
    //check for cart cookie
    if (!req.cookies.cartData) {
      res.cookie("cartData", [1, 3, 5, 7]);
      console.log(req.cookie.cartData)
      return res.json("No items in cart");
    }
    let cookie = req.cookies.cartData;
    if (cookie.length > 0) {
      //create placeholders for query
     getCart(cookie)
    } else {
      res.json("No items in cart");
    }
  } catch (error) {
    res.status(500).json("Internal server error");
  }
  next();
};


const cartInsert = async (req, res, next) => {
  if (!req.body.product_id) return res.json("Invalid response");
  const id = req.body.product_id;
  let cookie = req.cookies.cartitems || [];
  addCart(id, cookie)
};
module.exports = { cartData, cartInsert };

const pool = require("../db");

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
      const placeholders = Array.from(
        { length: cookie.length },
        (_, i) => `$${i + 1}`
      ).join(", ");
      const query = `SELECT * FROM products where product_id IN (${placeholders})`;
      await pool.query(query, cookie, (err, results) => {
        //check for query errors
        if (err) return res.json("error querying db", err);
        const cartitems = results.rows;
        if (cartitems.length > 0) return res.json(cartitems);
        else return res.json("Couldn't find any items");
      });
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
  await pool.query(
    "SELECT * FROM products where product_id=$1",
    [id],
    (err, results) => {
      if (err) return res.json("Error querying db", err);
      const products = results.rows;
      if (products.length > 0) {
        cookie = [...cookie, id];
        res.cookie("cartitem", cookie);
        res.send(cookie)
      } else {
        return res.json("Invalid response");
      }
    }
  );
};
module.exports = { cartData, cartInsert };

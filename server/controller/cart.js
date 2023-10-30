const pool = require("../db");
const getCart = async(cookie)=>{
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
}

const addCart = async(id, cookie)=>{
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
}
module.exports = {getCart, addCart}
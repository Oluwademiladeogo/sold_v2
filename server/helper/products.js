const pool = require('../db')
module.exports = async()=>{
 return await pool.query("SELECT * FROM products ORDER BY product_id;")
}





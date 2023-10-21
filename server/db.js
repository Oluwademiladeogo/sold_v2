require("dotenv").config()
const Pool = require("pg").Pool
const pool = new Pool({
    user: "postgres",
    password: process.env.DB_PASSWORD,
    host: "localhost",
    port: 5432,
    database: "sold"
}
)
module.exports = pool
//accessories, watches, smart watches, laptops, games, phones and tablets, headphones&speakers, games, 
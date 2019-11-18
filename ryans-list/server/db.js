const mysql = require("mysql")

const pool = mysql.createPool({
  connectLimit: 10,
  user: "root",
  pasword: "",
  host: "localhost",
  database: "ryans_list"
})

module.exports = pool

// pasword: -IzU1r2Bet6f7FakevuK
// username:RyansList_nov_15

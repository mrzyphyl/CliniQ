const mysql = require('mysql2/promise')

const mySqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'jobdispo',
    database: 'cliniq_systems'
})

module.exports = mySqlPool
const mysql = require('mysql2');

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123@Abcxy',
    database: 'restaurants',
});

module.exports = mysqlConnection;

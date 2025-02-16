const mysql = require('mysql2');
require('dotenv').config(); // Load environment variables

// Define the connection parameters for the database
const dbConfig = {
    connectionLimit: 10,
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
};

// Create the connection to the database
const connection = mysql.createConnection(dbConfig);

// Connect to the database
connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected to MySQL database!");
});

module.exports = connection;

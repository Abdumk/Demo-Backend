// Import the express module 
const express = require('express');
// Import the mysql module  
const mysql = require('mysql2');
// Create the express app 
const app = express();

// Define the connection parameters for the database 
const dbConfig = {
    connectionLimit: 10,
    password: "demoapp",
    user: "demoapp",
    host: "127.0.0.1",
    database: "demoapp",
  }
  // Create the connection to the database 
  const connection = mysql.createConnection(dbConfig);
  // Connect to the database 
  connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  });
  // Use the express.json() middleware to parse the request body 
  app.use(express.json());
  // Create a simple get request handler to send a response back  
  app.get('/', (req, res) => {
    res.send('Testing!');
  });







// Set up the port to listen to 
const port = 4000;
// Set up the listener 
app.listen(port, () => console.log(`Listening on port ${port}`));




const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables

const addEmployeeRoutes = require('./Routes/Addemploye.routes');
const loginRoutes = require('./Routes/Login.routes');

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', addEmployeeRoutes);
app.use('/api', loginRoutes);

// Test route
app.get('/', (req, res) => {
    res.send('Testing!');
});

// Start server
app.listen(port, () => console.log(`Listening on port ${port}`));





























// // Import the express module 
// const express = require('express');
// // Import the mysql module  
// const mysql = require('mysql2');
// const cors = require('cors');



// // Create the express app 
// const app = express();

// // Use the CORS middleware
// app.use(cors());

// // create table employee_test (id INT AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(255), last_name VARCHAR(255), email VARCHAR(255), password VARCHAR(255)); the SQL query to create the table in the database.
// // CREATE TABLE employee_test (
// //   id INT AUTO_INCREMENT PRIMARY KEY,
// //   first_name VARCHAR(255) NOT NULL,
// //   last_name VARCHAR(255) NOT NULL,
// //   email VARCHAR(255) UNIQUE NOT NULL,
// //   password VARCHAR(255) NOT NULL
// // );


// // Define the connection parameters for the database 
// const dbConfig = {
//     connectionLimit: 10,
//     password: "demoapp",
//     user: "demoapp",
//     host: "127.0.0.1",
//     database: "demoapp",
//   }
//   // Create the connection to the database 
//   const connection = mysql.createConnection(dbConfig);
//   // Connect to the database 
//   connection.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });
//   // Use the express.json() middleware to parse the request body 
//   app.use(express.json());
//   // Create a simple get request handler to send a response back  
//   app.get('/', (req, res) => {
//     res.send('Testing!');
//   });

// // Allow CORS to all 
// // app.use((req, res, next) => {
// //     res.setHeader("Access-Control-Allow-Origin", "*");
// //     res.setHeader(
// //       "Access-Control-Allow-Methods",
// //       "OPTIONS, GET, POST, PUT, PATCH, DELETE" // what matters here is that OPTIONS is present
// //     );
// //     res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
// //     next();
// //   });
//   // Post request handler to add a new employee to the database
//   app.post('/add-employee', (req, res) => {
//     // console.log(req.body);
//     // Write the sql query to add to the database table named employee_test
//     const sql = `INSERT INTO employee_test (first_name, last_name, email, password) VALUES ('${req.body.first_name}', '${req.body.last_name}', '${req.body.email}', '${req.body.password}')`;
//     // Execute the query 
//     connection.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("1 record inserted");
//     });
//     // Send a response back to the client 
//     const response = {
//       status: 'success',
//       message: 'Employee added succesfully',
//     };
//     res.status(200).json(response);
//   });
//   // Post request handler to login an employee which comes to this route /login 
//   app.post('/login', (req, res) => {
//     console.log(req.body);
//     // Write the sql query to retrieve the employee with the email and password provided by the user and compare it with the data in the database 
//     const sql = `SELECT * FROM employee_test WHERE email = '${req.body.email}' AND password = '${req.body.password}'`;
//     // Execute the query
//     connection.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log(result);
//       // Check if the result is empty or not 
//       if (result.length > 0) {
//         // Send a response back to the client 
//         const response = {
//           status: 'success',
//           message: 'Login successful',
//         };
//         res.status(200).json(response);
//       } else {
//         // Send a response back to the client 
//         const response = {
//           status: 'failure',
//           message: 'Login failed',
//         };
//         res.status(200).json(response);
//       }
//     });
//   });



// // Set up the port to listen to 
// const port = 4000;
// // Set up the listener 
// app.listen(port, () => console.log(`Listening on port ${port}`));




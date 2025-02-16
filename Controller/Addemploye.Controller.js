const connection = require('../DB config/dbconfig');

exports.addEmployee = (req, res) => {
    const { first_name, last_name, email, password } = req.body;

    if (!first_name || !last_name || !email || !password) {
        return res.status(400).json({ status: 'failure', message: 'All fields are required' });
    }

    const sql = `INSERT INTO employee_test (first_name, last_name, email, password) VALUES (?, ?, ?, ?)`;

    connection.query(sql, [first_name, last_name, email, password], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ status: 'failure', message: 'Database error' });
        }
        console.log("1 record inserted");
        res.status(200).json({ status: 'success', message: 'Employee added successfully' });
    });
};

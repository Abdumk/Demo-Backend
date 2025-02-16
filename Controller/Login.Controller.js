const connection = require('../DB config/dbconfig');

exports.loginEmployee = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ status: 'failure', message: 'Email and password are required' });
    }

    const sql = `SELECT * FROM employee_test WHERE email = ? AND password = ?`;

    connection.query(sql, [email, password], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ status: 'failure', message: 'Database error' });
        }

        if (result.length > 0) {
            res.status(200).json({ status: 'success', message: 'Login successful' });
        } else {
            res.status(401).json({ status: 'failure', message: 'Invalid email or password' });
        }
    });
};

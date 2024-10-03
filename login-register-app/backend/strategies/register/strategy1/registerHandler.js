const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');
const db = require('../../../dbConnection');

module.exports = [
    // Validation middleware
    check('email').isEmail().withMessage('Invalid email format'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password } = req.body;
        const hashedPassword = bcrypt.hashSync(password, 10);

        // SQL query to insert the new user into the database
        const sql = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
        db.query(sql, [name, email, hashedPassword], (err, result) => {
            if (err) {
                console.error('Error during registration:', err);
                return res.status(500).json({ error: 'An error occurred during registration', details: err });
            }
            res.status(200).json({ message: 'Registration successful', userId: result.insertId });
        });
    }
];

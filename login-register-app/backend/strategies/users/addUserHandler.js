// ملف addUserHandler.js
const db = require('../../dbConnection');

module.exports = (req, res) => {
    const { name, email, password, profile_image } = req.body;

    const sql = `INSERT INTO users (name, email, password, profile_image) VALUES (?, ?, ?, ?)`;
    db.query(sql, [name, email, password, profile_image], (err, result) => {
        if (err) {
            console.error('Error adding user:', err);
            return res.status(500).json({ error: 'Error adding user' });
        }
        res.status(200).json({ message: 'User added successfully' });
    });
};

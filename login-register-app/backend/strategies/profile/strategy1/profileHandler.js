const jwt = require('jsonwebtoken');
const db = require('../../../dbConnection');

module.exports = (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(403).json({ error: 'No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET || 'secret', (err, decoded) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to authenticate token' });
        }

        const sql = `SELECT id, name, email, profile_image FROM users WHERE id = ?`;
        db.query(sql, [decoded.id], (err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Error fetching profile', details: err });
            }
            if (results.length === 0) {
                return res.status(404).json({ error: 'User not found' });
            }

            // Update profile image link
            if (results[0].profile_image) {
                results[0].profile_image = `http://localhost:3000/uploads/${results[0].profile_image}`;
            }

            res.status(200).json(results[0]);
        });
    });
};

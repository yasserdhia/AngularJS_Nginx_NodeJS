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

            // Update profile image link to include the full URL for frontend display
            const user = results[0];
            user.profile_image = user.profile_image 
                ? `https://localhost/uploads/${user.profile_image}` 
                : 'https://localhost/assets/default-avatar.png';

            res.status(200).json(user);
        });
    });
};

const bcrypt = require('bcrypt');
const db = require('../../../dbConnection');

module.exports = (req, res) => {
    const { token, email, password } = req.body;

    // Verify token and email
    const sql = `SELECT * FROM users WHERE email = ? AND reset_token = ? AND reset_token_expiration > ?`;
    db.query(sql, [email, token, Date.now()], (err, results) => {
        if (err || results.length === 0) {
            return res.status(400).json({ error: 'Invalid or expired token' });
        }

        // Update password
        const hashedPassword = bcrypt.hashSync(password, 10);
        const updateSql = `UPDATE users SET password = ?, reset_token = NULL, reset_token_expiration = NULL WHERE email = ?`;
        db.query(updateSql, [hashedPassword, email], (err, result) => {
            if (err) {
                console.error('Error resetting password:', err);
                return res.status(500).json({ error: 'Error resetting password' });
            }
            res.status(200).json({ message: 'Password reset successful' });
        });
    });
};

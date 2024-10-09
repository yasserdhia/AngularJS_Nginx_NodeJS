// ملف deleteUserHandler.js
const db = require('../../dbConnection');

module.exports = (req, res) => {
    const { id } = req.params;

    const sql = `DELETE FROM users WHERE id = ?`;
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error deleting user:', err);
            return res.status(500).json({ error: 'Error deleting user' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    });
};

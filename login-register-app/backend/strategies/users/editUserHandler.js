// ملف editUserHandler.js
const db = require('../../dbConnection');

module.exports = (req, res) => {
    const { id } = req.params;
    const { name, email, profile_image } = req.body;

    const sql = `UPDATE users SET name = ?, email = ?, profile_image = ? WHERE id = ?`;
    db.query(sql, [name, email, profile_image, id], (err, result) => {
        if (err) {
            console.error('Error editing user:', err);
            return res.status(500).json({ error: 'Error editing user' });
        }
        res.status(200).json({ message: 'User updated successfully' });
    });
};

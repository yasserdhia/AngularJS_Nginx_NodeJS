const db = require('../../dbConnection'); // استدعاء الاتصال بقاعدة البيانات

module.exports = (req, res) => {
    const sql = `SELECT id, name, email, profile_image FROM users`;
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            return res.status(500).json({ error: 'Error fetching users', details: err });
        }
        res.status(200).json(results);
    });
};

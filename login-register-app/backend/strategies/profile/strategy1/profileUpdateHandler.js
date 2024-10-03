const jwt = require('jsonwebtoken');
const db = require('../../../dbConnection');
const multer = require('multer');
const bcrypt = require('bcrypt');

// إعداد التخزين باستخدام multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

module.exports = (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(403).json({ error: 'No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET || 'secret', (err, decoded) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to authenticate token' });
        }

        const { name, email, password } = req.body;
        const profileImage = req.file ? req.file.filename : null;

        let query = 'UPDATE users SET name = ?, email = ?';
        let values = [name, email];

        // إذا كان هناك كلمة مرور جديدة، قم بتشفيرها وإضافتها في التحديث
        if (password) {
            const hashedPassword = bcrypt.hashSync(password, 10);
            query += ', password = ?';
            values.push(hashedPassword);
        }

        // إذا كان هناك صورة جديدة، قم بإضافتها في التحديث
        if (profileImage) {
            query += ', profile_image = ?';
            values.push(profileImage);
        }

        query += ' WHERE id = ?';
        values.push(decoded.id);

        db.query(query, values, (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Error updating profile', details: err });
            }

            // استجابة النجاح
            res.status(200).json({ message: 'Profile updated successfully' });
        });
    });
};

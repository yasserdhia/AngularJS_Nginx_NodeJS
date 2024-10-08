const db = require('../../dbConnection'); // استدعاء الاتصال بقاعدة البيانات

module.exports = (req, res) => {
    const sql = `SELECT id, name, email, profile_image FROM users`;
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            return res.status(500).json({ error: 'Error fetching users', details: err });
        }

        // تعديل مسار الصورة إذا كانت موجودة
        const updatedResults = results.map(user => {
            if (user.profile_image) {
                // إضافة المسار الكامل للصور المرفوعة
                user.profile_image = `http://localhost:3000/uploads/${user.profile_image}`;
            } else {
                // يمكنك ترك الحقل فارغًا أو تعيين صورة افتراضية هنا
                user.profile_image = null;
            }
            return user;
        });

        res.status(200).json(updatedResults);
    });
};

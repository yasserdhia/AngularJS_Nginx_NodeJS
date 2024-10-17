const db = require('../../dbConnection');

module.exports = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  let profile_image = req.file ? req.file.filename : req.body.profile_image; // التعامل مع الملف من req.file

  // طباعة البيانات المستلمة لتتبع الأخطاء
  console.log('Received data:', { id, name, email, profile_image });

  // التحقق من وجود الحقول المطلوبة
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  // إذا لم يتم تقديم صورة الملف الشخصي، نعيّن القيمة الافتراضية أو نحافظ على القيمة الحالية
  if (!profile_image) {
    const getCurrentImageQuery = 'SELECT profile_image FROM users WHERE id = ?';
    db.query(getCurrentImageQuery, [id], (err, result) => {
      if (err) {
        console.error('Error fetching current profile image:', err);
        return res.status(500).json({ error: 'Error fetching current profile image' });
      }
      profile_image = result[0]?.profile_image || null;
      updateUser();
    });
  } else {
    updateUser();
  }

  function updateUser() {
    const sql = `UPDATE users SET name = ?, email = ?, profile_image = ? WHERE id = ?`;
    db.query(sql, [name, email, profile_image, id], (err, result) => {
      if (err) {
        console.error('Error updating user:', err);
        return res.status(500).json({ error: 'Error updating user' });
      }
      res.status(200).json({ message: 'User updated successfully' });
    });
  }
};

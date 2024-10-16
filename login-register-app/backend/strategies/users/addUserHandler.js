const bcrypt = require('bcrypt');
const db = require('../../dbConnection');

module.exports = (req, res) => {
  const { name, email, password, profile_image } = req.body;

  // التحقق من وجود جميع الحقول المطلوبة
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email, and password are required' });
  }

  // توليد كلمة المرور المشفرة
  const hashedPassword = bcrypt.hashSync(password, 10);

  const sql = `INSERT INTO users (name, email, password, profile_image) VALUES (?, ?, ?, ?)`;
  db.query(sql, [name, email, hashedPassword, profile_image], (err, result) => {
    if (err) {
      console.error('Error adding user:', err);
      return res.status(500).json({ error: 'Error adding user' });
    }
    res.status(200).json({ message: 'User added successfully' });
  });
};

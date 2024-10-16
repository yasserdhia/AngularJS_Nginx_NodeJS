const db = require('../../dbConnection');

module.exports = (req, res) => {
  const { id } = req.params;
  const { name, email, profile_image } = req.body;

  // التحقق من وجود الحقول المطلوبة
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const sql = `UPDATE users SET name = ?, email = ?, profile_image = ? WHERE id = ?`;
  db.query(sql, [name, email, profile_image, id], (err, result) => {
    if (err) {
      console.error('Error updating user:', err);
      return res.status(500).json({ error: 'Error updating user' });
    }
    res.status(200).json({ message: 'User updated successfully' });
  });
};

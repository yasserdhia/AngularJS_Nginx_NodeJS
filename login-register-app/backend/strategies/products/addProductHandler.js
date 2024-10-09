// ملف addProductHandler.js
const db = require('../../dbConnection');

module.exports = (req, res) => {
    const { title, price, description, imageUrl } = req.body;

    const sql = `INSERT INTO products (title, price, description, imageUrl) VALUES (?, ?, ?, ?)`;
    db.query(sql, [title, price, description, imageUrl], (err, result) => {
        if (err) {
            console.error('Error adding product:', err);
            return res.status(500).json({ error: 'Error adding product' });
        }
        res.status(200).json({ message: 'Product added successfully' });
    });
};

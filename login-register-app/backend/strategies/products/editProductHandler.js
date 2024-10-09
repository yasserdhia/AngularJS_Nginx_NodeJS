// ملف editProductHandler.js
const db = require('../../dbConnection');

module.exports = (req, res) => {
    const { id } = req.params;
    const { title, price, description, imageUrl } = req.body;

    const sql = `UPDATE products SET title = ?, price = ?, description = ?, imageUrl = ? WHERE id = ?`;
    db.query(sql, [title, price, description, imageUrl, id], (err, result) => {
        if (err) {
            console.error('Error editing product:', err);
            return res.status(500).json({ error: 'Error editing product' });
        }
        res.status(200).json({ message: 'Product updated successfully' });
    });
};

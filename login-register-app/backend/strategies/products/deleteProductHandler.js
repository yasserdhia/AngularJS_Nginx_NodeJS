// ملف deleteProductHandler.js
const db = require('../../dbConnection');

module.exports = (req, res) => {
    const { id } = req.params;

    const sql = `DELETE FROM products WHERE id = ?`;
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error deleting product:', err);
            return res.status(500).json({ error: 'Error deleting product' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    });
};

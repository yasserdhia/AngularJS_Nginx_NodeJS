const db = require('../../dbConnection'); // الاتصال بقاعدة البيانات

module.exports = (req, res) => {
    const sql = `SELECT id, title, price, imageUrl FROM products`; // جلب المنتجات
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching products:', err);
            return res.status(500).json({ error: 'Error fetching products', details: err });
        }
        res.status(200).json(results);
    });
};

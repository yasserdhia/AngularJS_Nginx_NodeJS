const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors'); // إضافة CORS
const { check, validationResult } = require('express-validator'); // إضافة express-validator للتحقق من المدخلات
require('dotenv').config(); // لاستخدام المتغيرات البيئية

const app = express();

// إعداد MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'yasser',
    password: 'yasserdb',
    database: 'yasserdb'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

// تمكين CORS
app.use(cors());

// تمكين body-parser لتحليل JSON
app.use(bodyParser.json());

// تسجيل المستخدم
app.post('/register', [
    check('email').isEmail(),
    check('password').isLength({ min: 6 })
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    const sql = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
    db.query(sql, [name, email, hashedPassword], (err, result) => {
        if (err) {
            console.error('Error during registration:', err);
            return res.status(500).json({ error: 'An error occurred during registration' });
        }
        res.status(200).json({ message: 'Registration successful' });
    });
});

// تسجيل الدخول
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const sql = `SELECT * FROM users WHERE email = ?`;
    db.query(sql, [email], (err, results) => {
        if (err) {
            console.error('Error during login:', err);
            return res.status(500).json({ error: 'An error occurred during login' });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        const user = results[0];
        const passwordMatch = bcrypt.compareSync(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
        res.status(200).json({ token });
    });
});

// عرض جميع المستخدمين المسجلين
app.get('/users', (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            return res.status(500).json({ error: 'An error occurred while fetching users' });
        }
        res.status(200).json(results);
    });
});

// تشغيل الخادم على المنفذ 3000
app.listen(3000, () => {
    console.log('Server running on port 3000');
});

// server.js
const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const { check, validationResult } = require('express-validator');
const multer = require('multer');
require('dotenv').config(); // لاستخدام المتغيرات البيئية

const app = express();

// إعداد اتصال MySQL باستخدام المتغيرات البيئية أو القيم الافتراضية
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'mysql', // في Docker، استخدم 'mysql' بدل 'localhost'
    user: process.env.DB_USER || 'yasser',
    password: process.env.DB_PASSWORD || 'yasserdb',
    database: process.env.DB_DATABASE || 'yasserdb',
    port: process.env.DB_PORT || 3306
});

// الاتصال بقاعدة البيانات
db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        process.exit(1); // إنهاء العملية إذا فشل الاتصال بقاعدة البيانات
    }
    console.log('Connected to MySQL');
});

// تمكين CORS
const allowedOrigins = ['https://localhost']; // السماح بالوصول من الواجهة الأمامية
app.use(cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true // تمكين إرسال الكوكيز والمعلومات المحمية
}));

// تمكين body-parser لتحليل JSON
app.use(bodyParser.json());

// إعداد التخزين للصورة الشخصية باستخدام multer
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

// تسجيل المستخدم
app.post('/api/register', [
    check('email').isEmail().withMessage('Invalid email format'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
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
            return res.status(500).json({ error: 'An error occurred during registration', details: err });
        }
        res.status(200).json({ message: 'Registration successful', userId: result.insertId });
    });
});

// تسجيل الدخول
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Please provide both email and password' });
    }

    const sql = `SELECT * FROM users WHERE email = ?`;
    db.query(sql, [email], (err, results) => {
        if (err) {
            console.error('Error during login:', err);
            return res.status(500).json({ error: 'An error occurred during login', details: err });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Email not found' });
        }

        const user = results[0];
        const passwordMatch = bcrypt.compareSync(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Incorrect password' });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });

        res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });
    });
});

// عرض الملف الشخصي
app.get('/api/profile', (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(403).json({ error: 'No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET || 'secret', (err, decoded) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to authenticate token' });
        }

        const sql = `SELECT id, name, email, profile_image FROM users WHERE id = ?`;
        db.query(sql, [decoded.id], (err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Error fetching profile', details: err });
            }
            if (results.length === 0) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.status(200).json(results[0]);
        });
    });
});

// تحديث الملف الشخصي
app.post('/api/profile/update', upload.single('profileImage'), (req, res) => {
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

        if (password) {
            const hashedPassword = bcrypt.hashSync(password, 10);
            query += ', password = ?';
            values.push(hashedPassword);
        }

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
            res.status(200).json({ message: 'Profile updated successfully' });
        });
    });
});

// تشغيل الخادم على HTTP
app.listen(3000, () => {
    console.log('Server running on port 3000');
});

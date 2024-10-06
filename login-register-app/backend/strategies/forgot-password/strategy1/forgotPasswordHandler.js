const crypto = require('crypto');
const nodemailer = require('nodemailer');
const db = require('../../../dbConnection');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

module.exports = (req, res) => {
    const { email } = req.body;

    // Generate a unique token
    const token = crypto.randomBytes(32).toString('hex');
    
    // Set token expiration to one hour
    const expiration = Date.now() + 3600000;

    // Save token and expiration in the database
    const sql = `UPDATE users SET reset_token = ?, reset_token_expiration = ? WHERE email = ?`;
    db.query(sql, [token, expiration, email], (err, result) => {
        if (err) {
            console.error('Error saving reset token:', err);
            return res.status(500).json({ error: 'Error saving reset token' });
        }

        // Get strategy for reset password from environment variable
        const strategy = process.env.STRATEGY_RESET_PASSWORD || 'strategy1';

        // Construct reset URL dynamically based on strategy
        const resetUrl = `https://localhost/reset-password/${strategy}?token=${token}&email=${email}`;

        // Email content
        const mailOptions = {
            to: email,
            subject: 'Password Reset',
            text: `Click the following link to reset your password: ${resetUrl}`
        };

        // Send email
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error('Error sending email:', err);
                return res.status(500).json({ error: 'Error sending email' });
            }
            res.status(200).json({ message: 'Password reset link sent to your email' });
        });
    });
};

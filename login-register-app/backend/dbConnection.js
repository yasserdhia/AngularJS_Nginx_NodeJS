const mysql = require('mysql2');
require('dotenv').config(); // Load environment variables

// Create a MySQL connection using environment variables
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'mysql',
    user: process.env.DB_USER || 'yasser',
    password: process.env.DB_PASSWORD || 'yasserdb',
    database: process.env.DB_DATABASE || 'yasserdb',
    port: process.env.DB_PORT || 3306
});

// Connect to the database
db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        process.exit(1); // Exit process if connection fails
    }
    console.log('Connected to MySQL');
});

// Export the db connection for use in other files
module.exports = db;

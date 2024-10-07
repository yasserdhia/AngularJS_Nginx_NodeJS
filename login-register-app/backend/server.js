const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer'); // Import multer for file handling
require('dotenv').config(); // Load environment variables
const securityConfig = require('./security/securityConfig'); // Import security configurations

const app = express();

// Trust proxy for rate limiting and other middlewares
app.set('trust proxy', 1); // أو true حسب الحاجة

// Enabling CORS
const allowedOrigins = ['https://localhost'];
app.use(cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

// Enabling body-parser to parse JSON requests
app.use(bodyParser.json());

// Serve static files from 'uploads' directory for profile images
app.use('/uploads', express.static('uploads'));

// Multer storage setup for file uploads
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/'); // Ensure the path to the 'uploads' directory is correct
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Save files with a timestamp to avoid naming conflicts
    }
});
const upload = multer({ storage: storage }); // Initialize multer with the storage configuration

// Import security middlewares
const rateLimiter = require('./security/middleware/rateLimiter');
const validateRequests = require('./security/middleware/validateRequests');
const authenticator = require('./security/middleware/authenticator');

// Apply security middlewares based on configuration
if (securityConfig.rateLimiter.enabled) {
    app.use(rateLimiter(securityConfig.rateLimiter));
}
if (securityConfig.validation.enabled) {
    app.use(validateRequests(securityConfig.validation));
}

// Importing handlers
const loginHandler = require(`./strategies/login/${process.env.STRATEGY_LOGIN}/loginHandler`);
const registerHandler = require(`./strategies/register/${process.env.STRATEGY_REGISTER}/registerHandler`);
const profileHandler = require(`./strategies/profile/${process.env.STRATEGY_PROFILE}/profileHandler`);
const profileUpdateHandler = require(`./strategies/profile/${process.env.STRATEGY_PROFILE}/profileUpdateHandler`);
const forgotPasswordHandler = require(`./strategies/forgot-password/${process.env.STRATEGY_FORGOT_PASSWORD}/forgotPasswordHandler`);
const resetPasswordHandler = require(`./strategies/reset-password/${process.env.STRATEGY_RESET_PASSWORD}/resetPasswordHandler`);

// Defining routes
app.post('/api/login', loginHandler);
app.post('/api/register', registerHandler);

// Protect routes that require authentication
app.get('/api/profile', authenticator(securityConfig.authentication.jwt), profileHandler);
app.post('/api/profile/update', authenticator(securityConfig.authentication.jwt), upload.single('profileImage'), profileUpdateHandler);

app.post('/api/forgot-password', forgotPasswordHandler);
app.post('/api/reset-password', resetPasswordHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

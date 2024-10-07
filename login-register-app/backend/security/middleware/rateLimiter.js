const rateLimit = require('express-rate-limit');

module.exports = (config) => rateLimit({
  windowMs: config.windowMs || 15 * 60 * 1000, // Default: 15 minutes
  max: config.maxRequests || 100, // Default: 100 requests per window
  message: 'Too many requests from this IP, please try again later.'
});

const { check, validationResult } = require('express-validator');

module.exports = (config) => (req, res, next) => {
  // Example: Sanitize input if enabled
  if (config.sanitizeInput) {
    // Implement sanitization logic
  }

  // Validate request input
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

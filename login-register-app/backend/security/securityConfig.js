module.exports = {
    rateLimiter: {
      enabled: true,
      maxRequests: 100,
      windowMs: 15 * 60 * 1000 // 15 minutes
    },
    validation: {
      enabled: true,
      sanitizeInput: true
    },
    authentication: {
      jwt: {
        enabled: true,
        secret: process.env.JWT_SECRET || 'default-secret'
      }
    }
  };
  
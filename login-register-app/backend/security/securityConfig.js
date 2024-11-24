module.exports = {
  rateLimiter: {
    enabled: false // تعطيل التقييد
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

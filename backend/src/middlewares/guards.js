// Login guards for routes.  Use before the handler:  router.get('/', customerOnly, handler)
const authMiddleware = require('./auth.middleware');
const requireRole = require('./role.middleware');

const customerOnly = [authMiddleware, requireRole('CUSTOMER')];
const adminOnly = [authMiddleware, requireRole('ADMIN')];

module.exports = { customerOnly, adminOnly };

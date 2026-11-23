const { fail } = require('../utils/apiResponse');

// requireRole('ADMIN')  |  requireRole('CUSTOMER')
module.exports = (...roles) => (req, res, next) => {
  if (!req.user || !roles.includes(req.user.role)) return fail(res, 'Access denied', 403);
  next();
};

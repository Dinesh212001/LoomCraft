const { verifyToken } = require('../utils/jwt');
const { fail } = require('../utils/apiResponse');

// Login check: httpOnly cookie "token" illana Bearer header
module.exports = (req, res, next) => {
  const header = req.headers.authorization;
  const token = req.cookies?.token || (header?.startsWith('Bearer ') ? header.slice(7) : null);
  if (!token) return fail(res, 'Login required', 401);

  try {
    req.user = verifyToken(token); // { id, role }
    next();
  } catch {
    return fail(res, 'Invalid or expired token', 401);
  }
};

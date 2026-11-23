const jwt = require('jsonwebtoken');
const env = require('../config/env');

// payload: { id, role }  role = 'CUSTOMER' | 'ADMIN'
exports.signToken = (payload) => jwt.sign(payload, env.jwtSecret, { expiresIn: '7d' });
exports.verifyToken = (token) => jwt.verify(token, env.jwtSecret);

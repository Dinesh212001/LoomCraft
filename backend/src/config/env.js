require('dotenv').config();

module.exports = {
  port: Number(process.env.PORT) || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET || 'dev_secret',
  clientUrl: process.env.CLIENT_URL || 'http://localhost:3000',
  databaseUrl: process.env.DATABASE_URL,
};

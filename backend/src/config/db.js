const { Pool } = require('pg');
const env = require('./env');

const pool = new Pool({ connectionString: env.databaseUrl });

// Model files ithu tha use pannum:  db.query('SELECT ...', [values])
module.exports = pool;

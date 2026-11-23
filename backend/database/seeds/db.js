const { Pool } = require('pg');
const env = require('./env');

const pool = new Pool({
  connectionString: env.databaseUrl,
  ssl: env.dbSsl ? { rejectUnauthorized: false } : undefined,
  max: 10,
  connectionTimeoutMillis: 5000, // DB down na 5 sec la error, hang aagadhu
});

// Idle client error vandha app crash aagama log pannum
pool.on('error', (err) => console.error('[db] unexpected error:', err.message));

// Server start aagum bodhu call pannum: DB reachable-a nu check
pool.testConnection = async () => {
  const { rows } = await pool.query('SELECT current_database() AS db');
  return rows[0].db;
};

// Model files ithu tha use pannum:  db.query('SELECT ...', [values])
module.exports = pool;

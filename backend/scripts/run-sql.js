// Usage: node scripts/run-sql.js database/schema.sql
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');

async function main() {
  const file = process.argv[2];
  if (!file) throw new Error('SQL file path kudunga. Example: npm run db:init');
  const sql = fs.readFileSync(path.resolve(file), 'utf8');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  await pool.query(sql);
  await pool.end();
  console.log(`Done: ${file}`);
}

main().catch((e) => { console.error(e.message); process.exit(1); });

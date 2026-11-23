// Usage: npm run seed:admin  (admin user + 6 categories create pannum)
require('dotenv').config();
const bcrypt = require('bcryptjs');
const { Pool } = require('pg');

const categories = [
  'Silk Sarees', 'Cotton Sarees', 'Linen Sarees', 'Dupattas', 'Blouse Materials', "Men's Handloom Collection",
];
const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

async function main() {
  const { ADMIN_EMAIL, ADMIN_PASSWORD, DATABASE_URL } = process.env;
  if (!ADMIN_EMAIL || !ADMIN_PASSWORD) throw new Error('ADMIN_EMAIL, ADMIN_PASSWORD .env la set pannunga');
  const pool = new Pool({ connectionString: DATABASE_URL });

  const hash = await bcrypt.hash(ADMIN_PASSWORD, 10);
  await pool.query(
    'INSERT INTO admins (name, email, password) VALUES ($1, $2, $3) ON CONFLICT (email) DO NOTHING',
    ['Admin', ADMIN_EMAIL, hash]
  );
  for (const name of categories) {
    await pool.query(
      'INSERT INTO categories (name, slug) VALUES ($1, $2) ON CONFLICT (slug) DO NOTHING',
      [name, slugify(name)]
    );
  }
  await pool.end();
  console.log(`Seed done: admin (${ADMIN_EMAIL}) + ${categories.length} categories`);
}

main().catch((e) => { console.error(e.message); process.exit(1); });

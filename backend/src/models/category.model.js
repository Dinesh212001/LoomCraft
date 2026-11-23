const db = require('../config/db');

// MODEL = "categories" table ku SQL queries mattum.
module.exports = {
  // Customer site: visible categories
  findActive: async () => {
    const { rows } = await db.query('SELECT id, name, slug FROM categories WHERE is_active = true ORDER BY name');
    return rows;
  },

  // TODO: findBySlug, create, update, remove (admin)
};

const db = require('../config/db');

// MODEL = "products" table ku SQL queries mattum.
// Same columns Home page product cards ku venum, so oru base query ah vechukkom.
const CARD_SQL = `
  SELECT p.id, p.name, p.slug, p.fabric_type, p.color, p.price, p.discount_percent,
         c.name AS category_name, c.slug AS category_slug,
         (SELECT url FROM product_images WHERE product_id = p.id ORDER BY position LIMIT 1) AS image,
         COALESCE(i.quantity, 0) > 0 AS in_stock
  FROM products p
  JOIN categories c ON c.id = p.category_id
  LEFT JOIN inventory i ON i.product_id = p.id
  WHERE p.is_active = true AND c.is_active = true`;

module.exports = {
  // Home: featured products
  findFeatured: async (limit) => {
    const { rows } = await db.query(`${CARD_SQL} AND p.is_featured = true ORDER BY p.created_at DESC LIMIT $1`, [limit]);
    return rows;
  },

  // Home: new arrivals
  findNewArrivals: async (limit) => {
    const { rows } = await db.query(`${CARD_SQL} ORDER BY p.created_at DESC LIMIT $1`, [limit]);
    return rows;
  },

  // Home: popular = most sold (cancelled orders ignored)
  findPopular: async (limit) => {
    const { rows } = await db.query(
      `${CARD_SQL}
       ORDER BY (SELECT COALESCE(SUM(oi.quantity), 0) FROM order_items oi
                 JOIN orders o ON o.id = oi.order_id
                 WHERE oi.product_id = p.id AND o.status <> 'CANCELLED') DESC,
                p.created_at DESC
       LIMIT $1`,
      [limit],
    );
    return rows;
  },

  // Home: special offers = products that have a discount
  findOffers: async (limit) => {
    const { rows } = await db.query(`${CARD_SQL} AND p.discount_percent > 0 ORDER BY p.discount_percent DESC LIMIT $1`, [limit]);
    return rows;
  },

  // TODO: findAllPublic (search + filters + sort + paging), findBySlug, findAllForAdmin, create, update, remove
};

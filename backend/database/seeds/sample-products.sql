-- Sample sarees for testing the Home page.   Run AFTER: npm run db:init  and  npm run seed:admin
-- npm run seed:sample          (safe to run again, it skips products that already exist)

INSERT INTO products (name, slug, description, category_id, fabric_type, weaving_technique, color, design_pattern, dimensions, has_blouse_piece, care_instructions, price, discount_percent, is_featured)
SELECT v.name, v.slug, v.description, c.id, v.fabric_type, v.weave, v.color, v.pattern, v.dimensions, v.blouse, v.care, v.price, v.discount, v.featured
FROM (VALUES
  ('Kanchipuram Silk Saree - Red',   'kanchipuram-silk-saree-red',   'Pure handloom Kanchipuram silk with zari border.', 'silk-sarees',   'Silk',   'Kanchipuram', 'Red',    'Zari border', '5.5m saree + 0.8m blouse', true,  'Dry clean only',        12500.00, 10, true),
  ('Arani Silk Saree - Green',       'arani-silk-saree-green',       'Light Arani silk, handwoven, soft drape.',         'silk-sarees',   'Silk',   'Arani',       'Green',  'Temple border','5.5m saree + 0.8m blouse', true,  'Dry clean only',         8900.00,  0, true),
  ('Chettinad Cotton Saree - Blue',  'chettinad-cotton-saree-blue',  'Soft handloom cotton with traditional checks.',    'cotton-sarees', 'Cotton', 'Chettinad',   'Blue',   'Checks',      '5.5m saree + 0.8m blouse', true,  'Hand wash cold',         1800.00,  5, true),
  ('Kovai Cotton Saree - Yellow',    'kovai-cotton-saree-yellow',    'Everyday Kovai cotton, breathable and light.',     'cotton-sarees', 'Cotton', 'Kovai',       'Yellow', 'Plain',       '5.5m saree',               false, 'Hand wash cold',         1400.00, 20, false),
  ('Handloom Linen Saree - Beige',   'handloom-linen-saree-beige',   'Pure linen saree, light and breathable.',          'linen-sarees',  'Linen',  'Plain weave', 'Beige',  'Plain',       '5.5m saree',               false, 'Machine wash gentle', 3200.00,  0, false),
  ('Silk Dupatta - Maroon',          'silk-dupatta-maroon',          'Handwoven silk dupatta with zari motifs.',         'dupattas',      'Silk',   'Jacquard',    'Maroon', 'Zari motifs', '2.5m x 1m',                false, 'Dry clean only',         2200.00, 15, false),
  ('Mens Cotton Veshti - White',     'mens-cotton-veshti-white',     'Traditional handloom cotton veshti.',              'men-s-handloom-collection', 'Cotton', 'Plain weave', 'White', 'Gold border', '4m',                    false, 'Hand wash',              1100.00,  0, false)
) AS v(name, slug, description, cat, fabric_type, weave, color, pattern, dimensions, blouse, care, price, discount, featured)
JOIN categories c ON c.slug = v.cat
ON CONFLICT (slug) DO NOTHING;

INSERT INTO product_images (product_id, url, position)
SELECT p.id, 'https://placehold.co/600x800/f3e9ec/8b1e3f?text=' || replace(p.name, ' ', '+'), 0
FROM products p
WHERE NOT EXISTS (SELECT 1 FROM product_images i WHERE i.product_id = p.id);

INSERT INTO inventory (product_id, quantity)
SELECT id, 10 FROM products
ON CONFLICT (product_id) DO NOTHING;

-- one product Out of Stock, to test the "Out of Stock" label
UPDATE inventory SET quantity = 0 WHERE product_id = (SELECT id FROM products WHERE slug = 'handloom-linen-saree-beige');

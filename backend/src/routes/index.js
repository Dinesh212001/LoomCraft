// routes/index.js  -  the ONLY index. Mounts every module's route file.
//
//   routes/customer/*.routes.js  ->  /api/...
//   routes/admin/*.routes.js     ->  /api/admin/...   (ADMIN login only)
//
// TO ADD YOUR MODULE:
//   1. create  routes/customer/products.routes.js   (copy customer/home.routes.js as the example)
//   2. add ONE line below:  router.use('/products', require('./customer/products.routes'));
// Planned routes + owners + status: docs/ROUTES.md
const { Router } = require('express');
// const { adminOnly } = require('../middlewares/guards');

const router = Router();

router.get('/health', (req, res) => res.json({ status: 'ok' }));

// ===================== CUSTOMER SITE  /api/... =====================
router.use('/home', require('./customer/home.routes'));   // example (built)
// router.use('/products', require('./customer/products.routes'));
// router.use('/orders', require('./customer/orders.routes'));

// ===================== ADMIN PORTAL  /api/admin/... =====================
// Admin login stays public, put it BEFORE the guard; everything after needs ADMIN:
// router.use('/admin/auth', require('./admin/auth.routes'));
// router.use('/admin', adminOnly);
// router.use('/admin/products', require('./admin/products.routes'));

module.exports = router;

// EXAMPLE route file (customer/home.routes.js)  ->  mounted in routes/index.js as /api/home
// Copy this pattern for your module: products.routes.js, orders.routes.js ...
// Add guards when needed:  router.get('/', customerOnly, ordersController.list)
const { Router } = require('express');
const homeController = require('../../controllers/customer/home.controller');
// const { customerOnly } = require('../../middlewares/guards');

const router = Router();

router.get('/', homeController.get);

module.exports = router;

const categoryModel = require('../models/category.model');
const productModel = require('../models/product.model');

// SERVICE = business logic. Model-a call pannum, data-va ready panni controller-ku kudukkum.

// price after discount (business rule lives HERE, not in SQL, not in the frontend)
const withFinalPrice = (p) => {
  const price = Number(p.price);
  return { ...p, price, final_price: Math.round(price - (price * p.discount_percent) / 100) };
};

module.exports = {
  getHomeData: async () => {
    const LIMIT = 8;
    const [categories, featured, newArrivals, popular, offers] = await Promise.all([
      categoryModel.findActive(),
      productModel.findFeatured(LIMIT),
      productModel.findNewArrivals(LIMIT),
      productModel.findPopular(LIMIT),
      productModel.findOffers(LIMIT),
    ]);

    return {
      categories,
      featured: featured.map(withFinalPrice),
      newArrivals: newArrivals.map(withFinalPrice),
      popular: popular.map(withFinalPrice),
      offers: offers.map(withFinalPrice),
      // promotional banners: no table in the 17 tables, so the frontend shows static banners (TODO)
    };
  },
};

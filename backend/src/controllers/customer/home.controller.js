const { ok } = require('../../utils/apiResponse');
const homeService = require('../../services/home.service');

// CONTROLLER = request edukkum, Service call pannum, response anuppum. Logic inga illa.
exports.get = async (req, res, next) => {
  try {
    const data = await homeService.getHomeData();
    return ok(res, data);
  } catch (err) { next(err); }
};

exports.notFound = (req, res) => res.status(404).json({ success: false, message: 'Route not found' });

// eslint-disable-next-line no-unused-vars
exports.errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ success: false, message: err.message || 'Server error' });
};

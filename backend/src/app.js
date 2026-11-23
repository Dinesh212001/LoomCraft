const path = require('path');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const corsOptions = require('./config/cors');
const routes = require('./routes');
const { notFound, errorHandler } = require('./middlewares/error.middleware');

const app = express();

app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// Local uploaded images (dev). Production la Cloudinary/S3.
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.use('/api', routes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;

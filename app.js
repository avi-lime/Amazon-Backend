// Importing Modules
const express = require('express');

// Importing Routers
const productRouter = require('./routes/productsRoutes.js');
const userRouter = require('./routes/usersRoutes.js');
const reviewRouter = require('./routes/reviewsRoutes.js');
const orderRouter = require('./routes/ordersRoutes.js');


// Middleware
const app = express();

app.use(express.json())
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/reviews', reviewRouter);
app.use('/api/orders', orderRouter);

module.exports = app
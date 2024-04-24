const express = require('express');

const { getAllOrders, createOrder, getOneOrder, deleteOrder, updateOrder } = require('../controllers/ordersControllers.js');
const orderRouter = express.Router();

orderRouter.route('/')
    .get(getAllOrders)
    .post(createOrder)

orderRouter.route('/:id')
    .get(getOneOrder)
    .delete(deleteOrder)
    .patch(updateOrder)

module.exports = orderRouter
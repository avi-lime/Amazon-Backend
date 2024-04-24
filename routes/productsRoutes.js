const express = require('express');

const { getAllProducts, createProduct, updateProduct, deleteProduct, replaceProduct, getOneProduct } = require('../controllers/productsControllers.js');
const productRouter = express.Router();

productRouter.route('/')
    .get(getAllProducts)
    .post(createProduct)

productRouter.route('/:id')
    .get(getOneProduct)
    .put(replaceProduct)
    .delete(deleteProduct)
    .patch(updateProduct)

module.exports = productRouter
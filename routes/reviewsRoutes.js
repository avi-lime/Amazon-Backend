const express = require('express');

const { getAllReviews, createReview, getOneReview, deleteReview, updateReview } = require('../controllers/reviewsControllers.js');
const reviewRouter = express.Router();

reviewRouter.route('/')
    .get(getAllReviews)
    .post(createReview)

reviewRouter.route('/:id')
    .get(getOneReview)
    .delete(deleteReview)
    .patch(updateReview)

module.exports = reviewRouter
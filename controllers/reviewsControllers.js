const reviewModel = require('../models/reviewsModel.js')

const getAllReviews = async (req, res) => {
    try {
        const reviews = await reviewModel.find();
        res.status(200)
            .json({
                status: "success",
                results: reviews.length,
                data: reviews
            })

    } catch (err) {
        res.status(400)
            .json({
                status: "failed",
                message: err.message
            })
    }
}

const getOneReview = async (req, res) => {
    try {
        const reqId = req.params.id
        const review = await reviewModel.findOne({ _id: reqId });
        res.status(200)
            .json({
                status: "success",
                results: 1,
                data: review
            })

    } catch (err) {
        res.status(400)
            .json({
                status: "failed",
                message: err.message
            })
    }
}

const createReview = async (req, res) => {
    try {
        const { _id, ...data } = req.body
        const review = await reviewModel.create(data)

        res.status(201)
            .json({
                status: "sucess",
                data: review
            })
    } catch (err) {
        res.status(400)
            .json({
                status: "failed",
                message: err.message
            })

    }
}

const updateReview = async (req, res) => {
    try {

        const reqId = req.params.id;

        const result = await reviewModel.findOneAndUpdate({ _id: reqId }, req.body)

        res.status(204)
            .json({
                status: "success",
                data: result
            })


    } catch (err) {
        res.status(400)
            .json({
                status: "failed"
            })
    }
}

const deleteReview = async (req, res) => {
    try {

        const reqId = req.params.id

        const deleteResponse = await reviewModel.deleteOne({ _id: reqId })

        res.status(204)
            .json({
                status: 'success',
                response: deleteResponse
            })
    } catch (err) {
        res.status(400)
            .json({
                status: 'failed',
                error: err.message
            })
    }
}

module.exports = {
    getAllReviews,
    getOneReview,
    createReview,
    updateReview,
    deleteReview
}
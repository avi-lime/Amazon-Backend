const orderModel = require('../models/reviewsModel.js')

const getAllOrders = async (req, res) => {
    try {

        const orders = await orderModel.find();
        res.status(200)
            .json({
                status: "success",
                results: orders.length,
                data: orders
            })

    } catch (err) {
        res.status(400)
            .json({
                status: "failed",
                message: err.message
            })
    }
}

const getOneOrder = async (req, res) => {
    try {
        const reqId = req.params.id
        const order = await orderModel.findOne({ _id: reqId });
        res.status(200)
            .json({
                status: "success",
                results: 1,
                data: order
            })

    } catch (err) {
        res.status(400)
            .json({
                status: "failed",
                message: err.message
            })
    }
}

const createOrder = async (req, res) => {
    try {
        const { _id, ...data } = req.body
        const order = await orderModel.create(data)

        res.status(201)
            .json({
                status: "sucess",
                data: order
            })
    } catch (err) {
        res.status(400)
            .json({
                status: "failed",
                message: err.message
            })

    }
}

const updateOrder = async (req, res) => {
    try {

        const reqId = req.params.id;

        const result = await orderModel.findOneAndUpdate({ _id: reqId }, req.body)

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

const deleteOrder = async (req, res) => {
    try {

        const reqId = req.params.id

        const deleteResponse = await orderModel.deleteOne({ _id: reqId })

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
    getAllOrders,
    getOneOrder,
    createOrder,
    updateOrder,
    deleteOrder
}
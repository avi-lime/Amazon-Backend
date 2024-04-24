const mongoose = require('mongoose')


// Dummy Schema
const orderSchema = new mongoose.Schema({
    products: {
        type: [String],
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    totalAmt: {
        type: Number,
        required: true
    },
    paymentId: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    }
})

const orderModel = mongoose.model('orders', orderSchema)

module.exports = orderModel
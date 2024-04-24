const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: String,
    images: [String],
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    },
    info: {
        category: String,
        brand: String,
        ratingCount: Number,
        ratingValue: Number,
        stock: Number,
        specificOffers: [
            {
                title: String,
                description: String
            }
        ],
        amazonServices: [
            {
                title: String,
                description: String,
            }
        ]
    }
})

const productModel = mongoose.model('products', productSchema)

module.exports = productModel
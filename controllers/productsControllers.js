const productModel = require('../models/productsModel.js')

const getAllProducts = async (req, res) => {
    const { sort = 'price', page = 1, pageSize = 3, fields = 'title,price', ...q } = req.query;
    const sortStr = sort.split(",").join(" ")
    const fieldsStr = fields.split(",").join(" ")
    const skip = (page - 1) * pageSize

    let query = productModel.find(q, fieldsStr)
    query.sort(sortStr)
    query.skip(skip)
    query.limit(pageSize)

    const products = await query;
    const totalResults = await productModel.countDocuments()

    res.status(200)
        .json({
            status: 'success',
            results: products.length,
            skip,
            limit: pageSize,
            totalResults,
            data: {
                products
            }
        })
}

const getOneProduct = async (req, res) => {
    try {
        const reqId = req.params.id
        const product = await productModel.findOne({ _id: reqId })

        res.status(200)
            .json({
                status: "success",
                results: 1,
                data: {
                    products: product
                }
            })
    } catch (err) {
        res.status(400)
            .json({
                status: "failed",
                message: err.message
            })
    }
}

const createProduct = async (req, res) => {
    try {
        const { _id, ...data } = req.body
        const result = await productModel.create(data)

        res.status(201)
            .json({
                status: 'success',
                data: result
            })

    } catch (err) {
        res.status(400)
            .json({
                status: 'failed',
                message: err.message
            })
    }
}

const replaceProduct = async (req, res) => {
    try {

        const reqId = req.params.id
        const data = { ...req.body, _id: reqId }
        const result = await productModel.findOneAndReplace({ _id: reqId }, data)

        res.status(204)
            .json({
                status: "success",
                data: result
            })
    } catch (err) {
        res.status(400)
            .json({
                status: "failed",
                message: err.message
            })
    }
}

const updateProduct = async (req, res) => {
    try {

        const reqId = req.params.id;
        const { _id, ...reqBody } = req.body;

        const result = await productModel.findOneAndUpdate({ _id: reqId }, reqBody)

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

const deleteProduct = async (req, res) => {
    try {

        const reqId = req.params.id

        const deleteResponse = await productModel.deleteOne({ _id: reqId })

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
    getAllProducts,
    getOneProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    replaceProduct
}
const userModel = require('../models/usersModel.js')

const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200)
            .json({
                status: "success",
                results: users.length,
                data: users
            })

    } catch (err) {
        res.status(400)
            .json({
                status: "failed",
                message: err.message
            })
    }
}

const getOneUser = async (req, res) => {
    try {
        const reqId = req.params.id
        const user = await userModel.findOne({ _id: reqId });
        res.status(200)
            .json({
                status: "success",
                results: 1,
                data: user
            })

    } catch (err) {
        res.status(400)
            .json({
                status: "failed",
                message: err.message
            })
    }
}

const createUser = async (req, res) => {
    try {
        let { _id, ...data } = req.body
        const user = await userModel.create(data)

        res.status(201)
            .json({
                status: "sucess",
                data: user
            })
    } catch (err) {
        res.status(400)
            .json({
                status: "failed",
                message: err.message
            })

    }
}

const updateUser = async (req, res) => {
    try {

        const reqId = req.params.id;

        const result = await userModel.findOneAndUpdate({ _id: reqId }, req.body)

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

const deleteUser = async (req, res) => {
    try {

        const reqId = req.params.id

        const deleteResponse = await userModel.deleteOne({ _id: reqId })

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
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser
}
const express = require('express')
const { getAllUsers, createUser, updateUser, deleteUser, getOneUser } = require('../controllers/usersControllers.js')

const userRouter = new express.Router()

userRouter.route('/')
    .get(getAllUsers)
    .post(createUser)

userRouter.route('/:id')
    .get(getOneUser)
    .patch(updateUser)
    .delete(deleteUser)

module.exports = userRouter
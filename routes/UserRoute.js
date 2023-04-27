const UploadRoute = require('express').Router()
const UploadController = require('../controller/UserController')

UploadRoute.post(`/create`, UploadController.create)
UploadRoute.get(`/all`, UploadController.getAll)


module.exports = UploadRoute
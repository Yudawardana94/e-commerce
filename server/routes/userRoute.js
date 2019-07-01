const route = require('express').Router()
const userController = require('../controllers/userController')

route.post('/register',userController.register)
route.post('/login',userController.login)
route.post('/one',userController.findOne)
route.post('/update',userController.update)

module.exports = route
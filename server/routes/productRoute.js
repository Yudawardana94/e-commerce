const route = require('express').Router()
const productController = require('../controllers/productController')

route.get('/all',productController.findAll)
route.get('/user',productController.findUsers)
route.get('/one',productController.product)
route.post('/add',productController.create)
route.patch('/update',productController.update)
route.delete('/remove/:productid',productController.remove)

module.exports = route
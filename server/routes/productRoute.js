const route = require('express').Router()
const productController = require('../controllers/productController')
const { authentication, authorization } = require('../middleware/auth')
const images = require('../middleware/google-cloud-storage')


route.get('/all',productController.findAll)
route.get('/one/:id',productController.product)

route.use('/',authentication)

// route.get('/user',productController.findUsers)
route.post('/add',authorization,productController.create)
route.patch('/update/:id',authorization,productController.update)
route.delete('/remove/:id',authorization,productController.remove)

module.exports = route
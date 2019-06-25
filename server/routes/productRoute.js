const route = require('express').Router()
const productController = require('../controllers/productController')
const { authenticaiton, authorization } = require('../middleware/auth')


route.get('/all',productController.findAll)
route.get('/one/:id',productController.product)

route.use('/',authenticaiton)

// route.get('/user',productController.findUsers)
route.post('/add',authorization,productController.create)
route.patch('/update/:id',authorization,productController.update)
route.delete('/remove/:id',authorization,productController.remove)

module.exports = route
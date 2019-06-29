const route = require('express').Router()
const transactionController = require('../controllers/transactionController')
const { authentication, authorization } = require('../middleware/auth')

//menambahkan dalam history transaksi
route.use('/', authentication)

route.post('/add',authorization,transactionController.create)
route.get('/all',authorization,transactionController.all)
route.get('/one/:id',authorization,transactionController.one)

module.exports = route
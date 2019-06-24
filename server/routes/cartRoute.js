const route = require('express').Router()
const cartController = require('../controllers/cartcontroller')

route.get('/all',cartController.findAll)
route.post('/add',cartController.add)
route.patch('/update',cartController.update)
route.delete('/remove/:id',cartController.remove)

module.exports = route
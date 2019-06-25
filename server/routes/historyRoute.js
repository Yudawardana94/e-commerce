const route = require('express').Router()
const historyController = require('../controllers/historyController')

route.get('/find',historyController.find)
route.post('/add',historyController.add)
route.patch('/update/:id',historyController.update)
route.delete('/remove/:id',historyController.remove)

module.exports = route
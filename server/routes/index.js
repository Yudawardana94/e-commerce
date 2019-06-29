const route = require('express').Router()
const userRoute = require('./userRoute')
const productRoute = require('./productRoute')
const historyRoute = require('./historyRoute')
const transactionRoute = require('./transactionRoute')

route.use('/users',userRoute)
route.use('/products',productRoute)
route.use('/historys',historyRoute)
route.use('/transactions',transactionRoute)

route.get('/*',(req,res)=> {
    console.log(`404 Not found`)
    res.status(404).json({
        message : `Page not found. `
    })
})

module.exports = route
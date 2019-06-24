const route = require('express').Router()
const userRoute = require('./userRoute')
const productRoute = require('./productRoute')
const cartRoute = require('./cartRoute')

route.use('/users',userRoute)
route.use('/products',productRoute)
route.use('/carts',cartRoute)

route.get('/*',(req,res)=> {
    console.log(`404 Not found`)
    res.status(404).json({
        message : `Page not found. `
    })
})

module.exports = route
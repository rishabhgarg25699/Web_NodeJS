const route = require('express').Router()

route.get('/users', require('./users'));
route.get('/products', require('./products'))

exports = module.exports = {
    route
}
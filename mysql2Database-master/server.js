const express = require('express')
const server = express()
const todoRoute = require('./Routes/todos')

server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.get('/', function(req, res, next) {
    res.send("Hello World !! Aaja beech mein")
})

server.use('/public', express.static(__dirname + "/Frontend"))
server.use('/todos', todoRoute);

server.listen(8888);
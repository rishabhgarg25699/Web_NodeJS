const express = require('express');
const server = express();

server.get('/', function(req, res, next) {
    res.send("<h1><center> RISHABH GARG </center></h1>");
})

server.listen(2121)
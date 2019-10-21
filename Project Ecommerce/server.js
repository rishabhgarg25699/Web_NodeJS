const express = require('express');
const server = express();
const path = require('path');

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
// server.get('/', function(req, res, next) {
//     res.send("<h1><center> RISHABH GARG </center></h1>");
// })

server.use('/', express.static(path.join(__dirname, 'public')));
server.use('/api', require('./routes/api').route);

server.listen(1111, () => console.log('Server stated at http://localhost:2121'));
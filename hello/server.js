const express = require('express')
const svr = express()

svr.get('/intro', function(req, res) {
    res.send('My first Project')
})

svr.get('/', express.static(__dirname + '/public'))



svr.listen(2222);
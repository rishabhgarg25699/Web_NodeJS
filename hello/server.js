const express = require('express')
const svr = express()

svr.use(express.json())
svr.use(express.urlencoded({ extended: true }));

svr.get('/intro', function(req, res) {
    res.send('My first Project')
})

svr.get('/', express.static(__dirname + '/public'))

svr.use('/api', require('./routes/api').route)

svr.listen(1234);
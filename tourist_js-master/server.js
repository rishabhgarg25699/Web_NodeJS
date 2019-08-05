const express = require('express')
const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use('/', express.static((__dirname + "/front_end")))
server.use('/experience', express.static(__dirname + "/front_end/experience.html"))
server.use('/read', express.static(__dirname + "/front_end/read.html"))
server.use('/info', express.static(__dirname + "/front_end/info.html"))
server.use('/download', function(req, res, next) {
    res.download(__dirname + "/downlaods/MongoDB.pdf")
        // res.redirect('/experience')
})
server.post('/subscribe', (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    console.log(name + ' has subscribed with ' + email);
    res.redirect('/')
        // alert("Sunscribed")
});

server.listen(1234)
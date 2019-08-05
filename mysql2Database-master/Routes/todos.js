const route = require('express').Router()
const database = require('../db')

let todos = [];

route.get('/', function(req, res) {
    database.getAllPerson()
        .then(function(test1) {
            res.send(test1)
        })

    .catch(function(err) {
            res.send({ error: err })
        })
        // .then((test1) => res.send(test1))
        // .catch((err) => res.send({ error: err }))
})

route.post('/', function(req, res) {
    // todos.push({
    //     task: req.body.task
    // })
    // res.send(todos)
    // console.log("Came In adding for database")
    database.addNewPerson(req.body.task)
        .then(() => res.redirect('/todos'))
        .catch((err) => res.send({ error: err }))
})

module.exports = route;
const express = require('express')
const Router = express.Router
const route = Router()

let students = [
    {name: "Rishabh" , subject: "Competitive Programming"},
    {name: "Aman",subject: "Web D"}
]

route.get('/',(req,res) => res.send(students))

route.get('/add',(req,res)=>{
    students.push({
        name : req.query.name,
        subject : req.query.subject
    })
    res.send(students);
})

route.get('/:id',(req,res) => res.send(students[req.params.id]))

module.exports = route
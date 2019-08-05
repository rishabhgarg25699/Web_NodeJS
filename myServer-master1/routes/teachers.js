const express = require('express')
const Router = express.Router
const route = Router()

let teachers = [
    {name : "Arnav Bhaya" , subject : "Web Development"},
    {name : "Prateek Bhaya" , subject : "Competitive Coding"}
]

route.get('/',function(req,res){
    res.send(teachers)
})

route.get('/add',(req,res)=>{
    teachers.push({
        name : req.query.name,
        subject : req.query.subject
    })
    res.send(teachers);
})

route.get('/:id',function(req,res){
    res.send(teachers[req.params.id])
})

module.exports = route
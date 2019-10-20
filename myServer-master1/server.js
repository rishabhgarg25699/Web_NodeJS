const express = require('express')
const srv = express()

const teacherRoute = require('./routes/teachers');
const studentRoute = require('./routes/students');

srv.use('/teachers',teacherRoute)
srv.use('/students',studentRoute)

srv.listen(3000);

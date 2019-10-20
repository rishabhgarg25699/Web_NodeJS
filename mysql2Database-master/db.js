const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'myuser',
    database: 'rishabh',
    password: '123'
});

function getAllPerson() {
    return new Promise(function(resolve, reject) {

        connection.query(
            'SELECT * FROM test1',
            function(err, rows, cols) {
                if (err) {
                    reject(err)
                } else {
                    resolve(rows);
                }
            }
        )
    })
}

function addNewPerson(name) {
    return new Promise(function(resolve, reject) {
        connection.query(
            'INSERT INTO test1 (data) VALUES (?)', [name],
            function(err, results) {
                if (err) {
                    console.log(err)
                    reject(err)
                } else {
                    resolve()
                }
            }
        )
    })
}

exports = module.exports = {
    getAllPerson,
    addNewPerson
}
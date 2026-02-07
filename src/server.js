require('dotenv').config()
const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const mysql = require('mysql2')
const { log } = require('console')
const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

//config template engine
configViewEngine(app)


//khai báo route
app.use('/', webRoutes)

//test  connection
//create the connection to database 
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root', //defaul: empty
    password: '123456',
    database: 'hoidanit'
});

//simple query
connection.query(
    'select * from Users u',
    function (err, results, fields) {
        console.log(">>>results=  ", results);
        console.log(">>>fields= ", fields);

    }
)

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})

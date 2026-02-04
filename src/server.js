require('dotenv').config()
const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')

const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

//config template engine
configViewEngine(app)


//khai báo route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/abc', (req, res) => {
    res.render('sample.ejs')
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})

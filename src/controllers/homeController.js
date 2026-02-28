const connection = require('../config/database')

const getHomepage = (req, res) => {
    return res.render('home.ejs')
}
const getABC = (req, res) => {
    res.send("this is ABC page")
}
const getHanhdeptrai = (req, res) => {
    res.render('sample.ejs')
}

module.exports = { getHomepage, getABC, getHanhdeptrai }
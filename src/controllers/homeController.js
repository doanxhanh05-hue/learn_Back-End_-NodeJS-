const connection = require('../config/database')

const getHomepage = (req, res) => {
    let users = [];
    connection.query(
        'select * from Users u',
        function (err, results, fields) {
            users = results;
            console.log(">>>results home page=  ", results);

            // console.log(">>>check users: ", users);
            res.send(JSON.stringify(users))
        })

}
const getABC = (req, res) => {
    res.send("this is ABC page")
}
const getHanhdeptrai = (req, res) => {
    res.render('sample.ejs')
}

module.exports = { getHomepage, getABC, getHanhdeptrai }
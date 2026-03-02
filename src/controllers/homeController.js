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
const postCreateUser = async (req, res) => {
    // console.log(">>> req.body:", req.body);
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    // let { email, name, city } = req.body;


    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) 
        VALUES (?, ?, ?)`,
        [email, name, city]
    );
    res.send("create success")
    // connection.query(
    //     'select * from Users u',
    //     function (err, results, fields) {
    //         console.log(">>result = ", results);
    //     }

    // )
    // const [results, fields] = await connection.query('select * from Users u');
    // console.log(">>> check results: ", results);

}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

module.exports = { getHomepage, getABC, getHanhdeptrai, postCreateUser, getCreatePage }
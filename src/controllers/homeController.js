const connection = require('../config/database')
const { getAllUser } = require('../services/CRUDService')
const getHomepage = async (req, res) => {
    let results = await getAllUser();
    return res.render('home.ejs', { listUsers: results })
}
const getUpdatePage = (req, res) => {
    res.render('edit.ejs')
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

module.exports = { getUpdatePage, getHomepage, getABC, getHanhdeptrai, postCreateUser, getCreatePage }
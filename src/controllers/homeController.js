const getHomepage = (req, res) => {
    res.send('hello hanh dep trai nhat the gioi')
}
const getABC = (req, res) => {
    res.send("this is ABC page")
}
const getHanhdeptrai = (req, res) => {
    res.render('sample.ejs')
}
module.exports = { getHomepage, getABC, getHanhdeptrai }
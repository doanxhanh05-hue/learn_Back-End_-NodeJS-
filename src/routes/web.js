const express = require('express')
const { getHomepage, getABC, postCreateUser, getHanhdeptrai } = require('../controllers/homeController')
const router = express.Router()
//khai báo route
router.get('/', getHomepage)
router.get('/abc', getABC)
router.post('/create-user', postCreateUser);

module.exports = router;
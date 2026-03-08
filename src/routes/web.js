const express = require('express')
const { getHomepage, getUpdatePage, getABC, postCreateUser, getHanhdeptrai, getCreatePage } = require('../controllers/homeController')
const router = express.Router()
//khai báo route
router.get('/', getHomepage)
router.get('/abc', getABC)

router.get('/create', getCreatePage)
router.get('/update', getUpdatePage)
router.post('/create-user', postCreateUser);

module.exports = router;
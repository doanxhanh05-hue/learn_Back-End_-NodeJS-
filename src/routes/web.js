const express = require('express')
const { getHomepage, getABC, getHanhdeptrai } = require('../controllers/homeController')
const router = express.Router()
//khai báo route
router.get('/', getHomepage)

router.get('/abc', getABC)
router.get('/hahdeptrai', getHanhdeptrai)

module.exports = router;
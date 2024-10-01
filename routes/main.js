const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

//@desc     Login/Landing Page
//@Route    GET /
router.get('/', homeController.getIndex)


module.exports = router
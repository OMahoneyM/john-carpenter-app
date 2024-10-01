const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

//@desc     Landing Page
//@Route    GET /
router.get('/', homeController.getIndex)


//@desc     Update likes
//@Route    PUT /likes
router.put('/likes', homeController.updateLikes)


module.exports = router
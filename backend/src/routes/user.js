const {Router} = require('express');
const {editProfile} = require('../controllers/user')
const verifyToken = require('../../src/middlewares/verifyToken')

const router = Router()

router.patch('/', verifyToken, editProfile)

module.exports = router
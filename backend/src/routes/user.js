const {Router} = require('express');
const {editProfile, getUser} = require('../controllers/user')
const verifyToken = require('../../src/middlewares/verifyToken')

const router = Router()

router.patch('/', verifyToken, editProfile)
router.get('/:username', getUser)

module.exports = router
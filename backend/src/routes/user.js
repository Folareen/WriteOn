const {Router} = require('express');
const {editProfile} = require('../controllers/user')

const router = Router()

router.patch('/', editProfile)

module.exports = router
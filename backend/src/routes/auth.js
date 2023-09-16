const {Router} = require('express')
const { login, signup, requestPasswordReset, resetPassword } = require('../controllers/auth')
const router = Router()

router.post('/login', login)
router.post('/signup', signup)
router.post('/forgot-password', requestPasswordReset)
router.post('/reset-password', resetPassword)

module.exports = router

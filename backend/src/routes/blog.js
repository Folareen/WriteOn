const {Router} = require("express")
const {createBlog, getBlogs } = require("../controllers/blog")
const verifyToken = require("../middlewares/verifyToken")

const router = Router()

router.post('/', verifyToken, createBlog)
router.route('/').get(getBlogs)

module.exports = router
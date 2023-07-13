const {Router} = require("express")
const {createBlog, getBlogs, editBlog } = require("../controllers/blog")
const verifyToken = require("../middlewares/verifyToken")

const router = Router()

router.post('/', verifyToken, createBlog)
router.route('/').get(getBlogs)
router.use(verifyToken)
router.route('/:id').patch(editBlog)

module.exports = router
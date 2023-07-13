const {Router} = require("express")
const {createBlog, getBlogs, editBlog, deleteBlog, likeBlog } = require("../controllers/blog")
const verifyToken = require("../middlewares/verifyToken")

const router = Router()

router.post('/', verifyToken, createBlog)
router.route('/').get(getBlogs)
router.use(verifyToken)
router.route('/:id/like').patch(likeBlog)
router.route('/:id').patch(editBlog).delete(deleteBlog)

module.exports = router
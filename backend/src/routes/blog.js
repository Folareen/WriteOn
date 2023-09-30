const { Router } = require("express")
const { createBlog, getBlogs, editBlog, deleteBlog, likeBlog, unlikeBlog, addComment, getBlog } = require("../controllers/blog")
const verifyToken = require("../middlewares/verifyToken")

const router = Router()

router.post('/', verifyToken, createBlog)
router.route('/').get(getBlogs)
router.route('/:username/:blogId').get(getBlog)
router.use(verifyToken)
router.route('/:id/like').patch(likeBlog)
router.route('/:id/unlike').patch(unlikeBlog)
router.route('/:id/comment').patch(addComment)
router.route('/:id').patch(editBlog).delete(deleteBlog)

module.exports = router
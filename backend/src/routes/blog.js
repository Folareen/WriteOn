const { Router } = require("express")
const { createBlog, getBlogs, editBlog, deleteBlog, likeBlog, unlikeBlog, addComment, getBlog, getBlogComments } = require("../controllers/blog")
const verifyToken = require("../middlewares/verifyToken")

const router = Router()

router.post('/', verifyToken, createBlog)
router.route('/').get(getBlogs)
router.route('/:username/:blogId').get(getBlog)
router.route('/:username/:blogId/comments').get(getBlogComments)
router.use(verifyToken)
router.route('/:username/:blogId/like').patch(likeBlog)
router.route('/:username/:blogId/unlike').patch(unlikeBlog)
router.route('/:username/:blogId/comment').patch(addComment)
router.route('/:id').patch(editBlog).delete(deleteBlog)

module.exports = router
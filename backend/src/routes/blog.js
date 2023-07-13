const {Router} = require("express")
const {createBlog, getBlogs } = require("../controllers/blog")
const validateObjectId = require("../middlewares/validateObjectId")
const verifyToken = require("../middlewares/verifyToken")

const router = Router()

router.post('/', verifyToken, createBlog)
router.route('/').get(getBlogs)
router.param("id", validateObjectId);

module.exports = router
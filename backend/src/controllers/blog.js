const Blog = require("../models/Blog")
const User = require("../models/User")
const cloudinary = require('cloudinary')
const blogCategories = require('../constants/blogCategories')

const getBlogs = async (req, res) => {
    try {
        let query = { published: true }
        const { category, page = 1, search } = req.query
        if (category) {
            query.category = category
        }
        if (search) {
            query.title = { $regex: new RegExp(search, 'i') }
        }

        const blogs = await Blog.find(query).populate("author").skip((page - 1) * 10).limit(10)

        const queriedBlogs = Blog.find(query)
        const count = await queriedBlogs.countDocuments()
        const pages = Math.ceil(count / 10)

        res.status(200).json({ blogs, page, count, pages  })
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

const createBlog = async (req, res) => {
    try {
        const user = req.user
        const { author, title, content, category, published } = req.body
        if (!author) {
            return res.status(400).json({ message: 'Author is required' })
        }
        if (!title) {
            return res.status(400).json({ message: 'Title is required' })
        }
        if (title.length < 3) {
            return res.status(400).json({ message: 'Title should be atleast three characters' })
        }
        if (!content) {
            return res.status(400).json({ message: 'Content is required' })
        }
        if (!category) {
            return res.status(400).json({ message: 'Category is required' })
        }
        if(!blogCategories.includes(category)){
            return res.status(400).json({message: 'Invalid blog category'})
        }

        const blogId = title.toLowerCase().split(' ').join('-')

        const titleExists = await Blog.findOne({
            id: blogId, author: user._id
        })

        if (titleExists) {
            return res.status(400).json({ message: 'Title in use' })
        }

        if (!req?.files?.coverImage) {
            return res.status(400).json({ message: 'Cover image is required' })
        }

        let coverImage = null
        const result = await cloudinary.v2.uploader.upload(req.files.coverImage.tempFilePath, { folder: 'writeon--blog--cover-images' })
        coverImage = result.secure_url

        const blog = await Blog.create({
            ...req.body,
            author: user._id, id: blogId,
            coverImage,
            published: published ? true : false
        })

        res.status(201).json({ blog, message: "Blog created successfully" })
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }

}

const editBlog = async (req, res) => {
    try {
        const user = req.user
        const { id } = req.params
        const blog = await Blog.findOne({ id, author: user._id })
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' })
        }

        const { title, content, description, category, published } = req.body

        if (title) {
            blog.title = title
        }
        if (content) {
            blog.content = content
        }
        if (description) {
            blog.description = description
        }
        if (category) {
            if(!blogCategories.includes(category)){
                return res.status(400).json({message: 'Invalid blog category'})
            }
            blog.category = category
        }

        if (published != undefined || published != null) {
            blog.published = published
        }


        if (req?.files?.coverImage) {
            const result = await cloudinary.v2.uploader.upload(req.files.coverImage.tempFilePath, { folder: 'writeon--blog--cover-images' })
            blog.coverImage = result.secure_url
        }

        await blog.save()


        res.status(200).json({ message: 'Blog updated successfully', blog })
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

const deleteBlog = async (req, res) => {
    try {
        const user = req.user
        const { id } = req.params
        const blog = await Blog.findOne({ id, author: user._id })
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' })
        }

        await blog.deleteOne()

        res.status(200).json({ message: 'Blog deleted successfully' })
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

const likeBlog = async (req, res) => {
    try {
        const user = req.user
        const { id } = req.params
        const blog = await Blog.findOne({ id, author: user._id })
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' })
        }

        const likes = blog.likes

        if (likes.includes(user._id)) {
            return res.status(400).json({ message: 'Blog liked already' })
        }

        blog.likes = [...likes, user._id]

        await blog.save()

        res.status(200).json({ likes: blog.likes, likesCount: blog.likes.length, message: 'Blog liked successfully' })
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

const unlikeBlog = async (req, res) => {
    try {
        const user = req.user
        const { id } = req.params
        const blog = await Blog.findOne({ id, author: user._id })
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' })
        }

        const likes = blog.likes

        if (!likes.includes(user._id)) {
            return res.status(400).json({ message: 'Blog not liked' })
        }


        blog.likes = likes.filter((like) => like != user._id)

        await blog.save()

        res.status(200).json({ likes: blog.likes, likesCount: blog.likes.length, message: 'Blog unliked successfully' })
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

const addComment = async (req, res) => {
    try {
        const { id } = req.params
        const { content } = req.body

        if (!content) {
            return res.status(400).json({ message: 'Content is required' })
        }

        const blog = await Blog.findOne({ id })

        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' })
        }

        const comment = {
            authorUsername: req.user.username,
            authorFirstname: req.user.firstName,
            authorLastname: req.user.lastName,
            authorId: req.user._id,
            content,
            date: new Date()
        }

        blog.comments = [
            ...blog.comments,
            comment
        ]

        await blog.save()

        res.status(200).json({ message: 'Comment added' })

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

const getBlog = async (req, res) => {
    try {
        const { blogId, username } = req.params
        
        const user = await User.findOne({username})
        const blog = await Blog.findOne({ id : blogId, author: user._id })

        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' })
        }

        blog.viewCount = blog.viewCount + 1
        await blog.save()

        res.status(200).json({ blog })
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

module.exports = {
    createBlog,
    getBlogs,
    editBlog,
    deleteBlog,
    likeBlog,
    unlikeBlog,
    addComment,
    getBlog
}
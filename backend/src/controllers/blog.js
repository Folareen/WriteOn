const Blog = require("../models/Blog")

const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({}).populate("author")
        res.status(200).json({ blogs })
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: 'Something went wrong' })
    }
}

const createBlog = async (req, res) => {
    try {
        const user = req.user
        const { author, title, content, category } = req.body
        if (!author) {
            return res.status(400).json({ message: 'Author is required' })
        }
        if (!title) {
            return res.status(400).json({ message: 'Title is required' })
        }
        if (title.length < 3) {
            return res.status(400).json({ message: 'Title should be atleast three characters' })
        }
        if (title.length > 20) {
            return res.status(400).json({ message: 'Title should not be more than twenty characters' })
        }
        if (!content) {
            return res.status(400).json({ message: 'Content is required' })
        }
        if (!category) {
            return res.status(400).json({ message: 'Category is required' })
        }

        const blogId = title.toLowerCase().split(' ').join('-')

        const titleExists = await Blog.findOne({
            id: blogId, author: user._id
        })

        if(titleExists){
            return res.status(400).json({message: 'Title in use'})
        }

        const blog = await Blog.create({
            ...req.body,
            author: user._id, id: blogId
        })

        res.status(201).json({ blog, message: "Blog created successfully" })
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: 'Something went wrong' })
    }

}

const editBlog = async (req, res) => {
    try {
        const user = req.user
        const { id } = req.params
        const blog = await Blog.findOne({id, author: user._id})
        if(!blog){
            return res.status(404).json({message: 'Blog not found'})
        }

        const { title, content, description, category, published } = req.body

        if(title){
            blog.title = title
        }
        if(content){
            blog.content = content
        }
        if(description){
            blog.description = description
        }
        if(category){
            blog.category = category
        }
        if(published != undefined || published != null){
            blog.published = published
        }

        await blog.save()

        
        res.status(200).json({ message: 'Blog updated successfully'})
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: 'Something went wrong' })
    }
}

const deleteBlog = async (req, res) => {
    try {
        const user = req.user
        const { id } = req.params
        const blog = await Blog.findOne({id, author: user._id})
        if(!blog){
            return res.status(404).json({message: 'Blog not found'})
        }
        
        await blog.deleteOne()

        res.status(200).json({ message: 'Blog deleted successfully'})
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: 'Something went wrong' })
    }
}

const likeBlog = async (req, res) => {
    try {
        const user = req.user
        const { id } = req.params
        const blog = await Blog.findOne({id, author: user._id})
        if(!blog){
            return res.status(404).json({message: 'Blog not found'})
        }

        const likes = blog.likes

        if(likes.includes(user._id)){
            return res.status(400).json({message: 'Blog liked already'})
        }
        
        blog.likes = [...likes, user._id]

        await blog.save()

        res.status(200).json({ likes: blog.likes, likesCount: blog.likes.length,  message: 'Blog liked successfully'})
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: 'Something went wrong' })
    }
}

module.exports = {
    createBlog,
    getBlogs,
    editBlog,
    deleteBlog,
    likeBlog
}
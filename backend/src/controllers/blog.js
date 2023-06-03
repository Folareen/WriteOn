const Blog = require("../models/Blog")
const getUserFromToken = require("../utils/getUserFromToken")

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
        const { author, title, content, category } = req.body
        if(!author){
            return res.status(400).json({message: 'Author is required'})
        }
        if(!title){
            return res.status(400).json({message: 'Title is required'})
        }
        if(title.length < 3){
            return res.status(400).json({message: 'Title should be atleast three characters'})
        }
        if(title.length > 20){
            return res.status(400).json({message: 'Title should not be more than twenty characters'})
        }
        if(!content){
            return res.status(400).json({message: 'Content is required'})
        }
        if(!category){
            return res.status(400).json({message: 'Category is required'})
        }
        
        const blogId = title.toLowerCase().split(' ').join('-')

        const user = getUserFromToken(req)

        const blog = await Blog.create({
            ...req.body,
            author : user._id, id : blogId
        }).populate("author")

        res.status(201).json({blog, message: "Blog created successfully"})
    } catch (err) {
        console.log(err.message)
        res.status(500).json({message: 'Something went wrong'})
    }

}


module.exports = {
    createBlog,
    getBlogs
}
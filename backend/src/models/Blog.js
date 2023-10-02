const { Schema, model } = require('mongoose')
const blogCategories = require('../constants/blogCategories')

const CommentSchema = new Schema({
    authorUsername: {
        type: String,
        required: true
    },
    authorFullName: {
        type: String,
        required: true
    },
    authorId: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

const BlogSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    coverImage: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        minLength: 3,
    },
    id: {
        type: String,
    },
    description: {
        type: String,
        required: false,
        default: ''
    },
    content: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: blogCategories,
        default: "other",
        required: true
    },
    published: {
        type: Boolean,
        required: true,
        default: false
    }, likes: {
        type: [Schema.Types.ObjectId],
        default: []
    },
    comments: {
        type: [CommentSchema],
        default: []
    },
    viewCount: {
        type: Number,
        default: 0,
    }
}, { timestamps: true })


const Blog = model('Blog', BlogSchema)

module.exports = Blog
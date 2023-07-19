const { Schema, model } = require('mongoose')

const CommentSchema = new Schema({
    authorUsername: {
        type: String,
        required: true
    },
    authorFirstname: {
        type: String,
        required: true
    },
    authorLastname: {
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
    title: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20
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
    }
}, { timestamps: true })


const Blog = model('Blog', BlogSchema)

module.exports = Blog
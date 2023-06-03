const {Schema, model} = require('mongoose')

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
        unique: true,
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
        default: true
    }
}, {timestamps : true})


const Blog = model('Blog', BlogSchema)

module.exports = Blog
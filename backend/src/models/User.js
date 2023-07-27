const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    avatar: {
        type: String,
        default: 'https://res.cloudinary.com/ddcy4lnrw/image/upload/v1690479888/writeon--user-avatars/m1lectmqlw9zhyqdqjgb.png'
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type:String,
        required: true,
        trim: true,
    },
    email: {
        type:String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type:String,
        required: true,
        select: false
    }
}, {timestamps: true});

const User = model('User', userSchema);

module.exports = User
const {Schema, model} = require('mongoose');

const userSchema = new Schema({
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
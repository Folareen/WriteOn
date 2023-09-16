const { Schema, model } = require('mongoose');

const tokenSchema = new Schema({
    token: {
        type: String, 
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    used: {
        type: Boolean,
        required: true,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 3600
    }
}, { timestamps: true });

const Token = model('Token', tokenSchema);

module.exports = Token
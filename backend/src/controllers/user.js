const User = require("../models/User");
const Blog = require("../models/Blog");
const cloudinary = require('cloudinary')

const editProfile = async (req, res) => {
    try {
        const { username, fullName, email } = req.body;
        if (!username && !fullName && !email) {
            return res.sendStatus(400)
        }
        const user = await User.findOne({ _id: req.user._id });
        if (username.length > 10) {
            return res.status(400).json({ message: "Username must not exceed 10 characters" })
        }

        const userNameTaken = await User.findOne({ username });
        if (userNameTaken && username != req.user.username) {
            return res.status(400).json({ message: 'Username already taken!' });
        }
        if (username) {
            user.username = username
        }
        if (fullName) {
            user.fullName = fullName
        }
        if (email) {
            user.email = email
        }
        if (req?.files?.avatar) {
            const result = await cloudinary.v2.uploader.upload(req.files.avatar.tempFilePath, { folder: 'writeon--user-avatars' })
            user.avatar = result.secure_url
        }
        await user.save()

        res.status(200).json({
            user: {
                _id: user._id,
                username: user.username,
                fullName: user.fullName,
                email: user.email,
            }, message: 'Profile updated successfully.'
        })

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}


const getUser = async (req, res) => {
    try {
        const { username } = req.params
        const user = await User.findOne({ username })
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        const blogs = await Blog.find({ author: user._id }).populate('author')

        res.status(200).json({
            user: {
                _id: user._id,
                username: user.username,
                fullName: user.fullName,
                email: user.email,
                avatar: user.avatar
            },
            blogs
        })

    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }

}


module.exports = {
    editProfile,
    getUser
}
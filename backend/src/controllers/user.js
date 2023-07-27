const User = require("../models/User");
const Blog = require("../models/Blog");
const cloudinary = require('cloudinary')

const editProfile = async (req, res) => {
    try {
        const { username, firstName, lastName, email } = req.body;
        if (!username && !firstName && !lastName && !email) {
            return res.sendStatus(400)
        }
        const user = await User.findOne({ _id: req.user._id });
        if (username) {
            user.username = username
        }
        if (firstName) {
            user.firstName = firstName
        }
        if (lastName) {
            user.lastName = lastName
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
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
            }, message: 'Profile updated successfully.'
        })

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: 'Something went wrong' })
    }
}


const getUser = async (req, res) => {
    try {
        const { username } = req.params
        const user = await User.findOne({ username })
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        const blogs = await Blog.find({ author: user._id })

        res.status(200).json({
            user: {
                _id: user._id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
            },
            blogs
        })

    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: 'Something went wrong' })
    }

}


module.exports = {
    editProfile,
    getUser
}
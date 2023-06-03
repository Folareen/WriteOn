const User = require("../models/User");
const jwt = require("jsonwebtoken")

const editProfile = async (req, res) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const { username, firstName, lastName, email } = req.body;
        if(!username && !firstName && !lastName && !email){
            return res.sendStatus(400)
        }
        const user = await User.findOne({ _id: decodedToken._id });
        if(username){
            user.username = username
        }
        if(firstName){
            user.firstName = firstName
        }
        if(lastName){
            user.lastName = lastName
        }
        if(email){
            user.email = email
        }
        await user.save()
        
        res.status(200).json({user : {
            _id : user._id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
        }, message: 'Profile updated successfully.'})

    } catch(error){
        console.log(error.message)
        res.status(500).json({ message: 'something went wrong' })
    }
}


const getUser = async (req, res) => {
    try {
        const { username } = req.params
        const user = await User.findOne({ username })
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        res.status(200).json({
            user: {
                _id: user._id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
            }
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
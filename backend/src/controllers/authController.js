const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    try {
        const { username, firstName, lastName, email, password } = req.body;

        if(!username || !firstName || !lastName || !email || !password) {
            return res.status(400).json({ message: `All fields are required!` })
        }

        const userExists = await User.findOne({ email });
        if(userExists) {
            return res.status(400).json({ message: 'User already exists!' });
        }

        const userNameTaken = await User.findOne({ username });
        if(userNameTaken) {
            return res.status(400).json({ message: 'Username already taken!' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({ username, firstName, lastName, email, password});

        const token = jwt.sign({ _id : user._id, email : user.email, username : user.username, firstName: user.firstName, lastName: user.lastName }, process.env.JWT_SECRET);

        res.status(201).json({ message: 'Account created successfully', token });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Unable to signup' });
    }

}


const login = async (req, res) => {
    res.send('login!');
}


module.exports = {
    login,
    signup
}
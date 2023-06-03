const jwt = require('jsonwebtoken')

const getUserFromToken = (req) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedUser = jwt.verify(token, process.env.JWT_SECRET);
    return decodedUser
}

module.exports = getUserFromToken
const jwt = require('jsonwebtoken')

const verifyToken =  (req, res, next) => {
    try{
        if(!req.headers.authorization){
            return res.status(401).json({message: 'Unauthorized!'})
        }
        
        const token = req.headers.authorization.split(' ')[1];

        if(!token) {
            return res.status(401).json({message: 'Unauthorized!'})
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        if(!decodedToken) {
            return res.status(401).json({message: 'Unathorized!'})
        }
        
        req.user = decodedToken

        next();
    }catch(err){
        console.log(err.message)
        res.status(500).json({message: 'Unable to verify token'})
    }
}

module.exports = verifyToken;
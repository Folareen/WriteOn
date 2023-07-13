const mongoose = require("mongoose");

const validateObjectId = (req, res, next) => {
    try {
        const {id} = req.params
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid id!' })
        }
        next()
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: 'Unable to verify token' })
    }
}

module.exports = validateObjectId;
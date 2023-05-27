const notFound = (req, res, next) => {
    res.status(404).send('Route not Found!');
}

module.exports = notFound;
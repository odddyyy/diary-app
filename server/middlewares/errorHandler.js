module.exports = (err, req, res, next) => {
    console.log(err)
    if (err.name == 'JsonWebTokenError') {
        res.status(400).json(err.message)
    }

    if (err.name == 'SequelizeConnectionRefusedError') {
        res.status(500).json('Server error!')
    }
    res.status(err.status).json(err.msg)
}
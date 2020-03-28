const { verify } = require('../helpers/token')

module.exports = (req, res, next) => {
    const { access_token } = req.headers
    try {
        req.userData = verify(access_token)
        next()
    } catch (err) {
        next(err)
    }
}
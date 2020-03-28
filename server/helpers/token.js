const jwt = require('jsonwebtoken')

const create = (data) => {
    return jwt.sign(data, process.env.TOKEN_SECRET)
}

const verify = (data) => {
    return jwt.verify(data, process.env.TOKEN_SECRET)
}

module.exports = {
    create,
    verify
}
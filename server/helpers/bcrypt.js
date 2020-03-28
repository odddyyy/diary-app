const bcrypt = require('bcrypt')
const salt = 10

const hashing = (password) => {
    return bcrypt.hashSync(password, salt)
}

const compare = (password, hashed) => {
    return bcrypt.compareSync(password, hashed)
}

module.exports = {
    hashing,
    compare
}
const { User } = require('../models')
const { create } = require('../helpers/token')
const { compare } = require('../helpers/bcrypt')

class UserController {

    static async login (req, res, next) {
        const { email, password } = req.body
        try {
            const findUser = await User.findOne({where:{ email }})
            if (!findUser) {
                next({
                    status:400,
                    msg:'Invalid email / password'
                })
            } else {
                if (compare(password, findUser.password)) {
                    const token = create({ id: findUser.id, name: findUser.name, email: findUser.email })
                    res.status(200).json({ token, name: findUser.name })
                } else {
                    next({
                        status:400,
                        msg:'Invalid email / password'
                    })
                }
            }
        } catch (err) {
            next(err)
        }
    }

    static async register (req, res, next) {
        const { name, email, password } = req.body
        try {
            const find = await User.findOne({where:{ email }})
            if (!find) {
                const userRegister = await User.create({ name, email, password })
                const token = create({ id:userRegister.id, name: userRegister.name, email: userRegister.email })
                res.status(201).json({ token, name })
            } else {
                next({
                    status:400,
                    msg:'Email already registered'
                })
            }
        } catch (err) {
            next(err)
        }
    }
}

module.exports = UserController
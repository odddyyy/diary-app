const { Diary } = require('../models')
module.exports = async (req, res, next) => {
    try {
        const authorized = await Diary.findOne({where:{id: req.params.id}})
        if (!authorized) {
            next({
                status: 404,
                msg:'Diary cannot be found'
            })
        } else if (authorized.user_id === req.userData.id) {
            next()
        } else {
            next({
                status:400,
                msg:'You are not authorized'
            })
        }    
    } catch (err) {
        next(err)
    }
}
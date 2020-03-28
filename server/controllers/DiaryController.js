const { Diary } = require('../models')

class DiaryController {

    static async show (req, res, next) {
        try {
            const getDiary = await Diary.findAll({where:{user_id:req.userData.id}})
            res.status(200).json(getDiary)
        } catch (err) {
            next(err)
        }
    }

    static async createDiary (req, res, next) {
        const { title, content } = req.body
        let newDate = new Date()
        try {
            const postDiary = await Diary.create({ title, content, date:newDate, user_id:req.userData.id })
            res.status(201).json(postDiary)
        } catch (err) {
            next(err)
        }
    }

    static async findDiary (req, res, next) {
        const { id } = req.params
        try {
            const find = await Diary.findOne({where:{ id:id }})
            if(!find || find === 0) {
                next({
                    status: 404,
                    msg:'Diary cannot be found'
                })
            } else {
                res.status(200).json(find)
            }
        } catch (err) {
            next(err)
        }
    }

    static async editDiary (req, res, next) {
        const { title, content } = req.body
        try {
            const editing = await Diary.update({ title, content }, {where:{id: req.params.id}})
            if (editing[0] === 0) {
                next({
                    status: 404,
                    msg:'Diary cannot be found'
                })
            } else {
                res.status(200).json({
                    msg: 'Diary updated',
                    updated: new Date()
                })
            }
        } catch (err) {
            next(err)
        }
    }
}

module.exports = DiaryController
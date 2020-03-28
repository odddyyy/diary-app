const router = require('express').Router()
const userController = require('../controllers/UserController')
const diaryController = require('../controllers/DiaryController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/diary', authentication, diaryController.show)
router.post('/diary', authentication, diaryController.createDiary)
router.get('/diary/:id', authentication, authorization, diaryController.findDiary)
router.put('/diary/:id', authentication, authorization, diaryController.editDiary)


module.exports = router
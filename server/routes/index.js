const router = require('express').Router()
const userController = require('../controllers/UserController')
const diaryController = require('../controllers/DiaryController')

router.post('/register', userController.register)
router.post('/login', userController.login)


module.exports = router
import express from 'express'
import UserController from '../../controller/user'

let router = express.Router()

router.get('/:username', UserController.findUserByUserName)
router.post('/', UserController.register)
router.put('/', UserController.login)

export default router

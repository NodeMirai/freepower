import express from 'express'
import UserController from '../../controller/user'

let router = express.Router()

router.get('/:username', UserController.findUserByUserName)
router.post('/', UserController.addUser)

export default router

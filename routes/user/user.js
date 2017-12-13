import express from 'express'
import UserController from '../../controller/user'

export const userRouter = express.Router()
export const protectetUserRouter = express.Router()

// 注册相关
userRouter.get('/:username', UserController.findUserByUserName)
userRouter.post('/', UserController.register)
userRouter.put('/', UserController.login)

// 用户信息修改
protectetUserRouter.put('/', UserController.updateUserInfo)
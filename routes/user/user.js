import express from 'express'
import UserController from '../../controller/user'

export const userRouter = express.Router()
export const protectetUserRouter = express.Router()

// 注册相关
router.get('/:username', UserController.findUserByUserName )
router.post('/', UserController.register )
router.put('/', UserController.login )

// 用户信息修改
protectetArticleRouter.put('/', UserController.updateUserInfo )

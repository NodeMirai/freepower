import Router from 'koa-router'
import UserController from '../../controller/user'

export const userRouter = Router()
export const protectetUserRouter = Router()

// 注册相关
userRouter.get('/:username', UserController.findUserByUserName)
userRouter.post('/', UserController.register)
userRouter.put('/', UserController.login)

// 用户信息修改
protectetUserRouter.put('/user', UserController.updateUserInfo)
protectetUserRouter.get('/user', UserController.getUserInfo)
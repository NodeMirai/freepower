/**
 * 总的路由管理文件，目录下其他路由实例都会引入该模块下
 */

import jwt from 'jsonwebtoken'
import Router from 'koa-router'

const router = new Router()

async function authenticate(ctx, next) {
  console.log('hehe----------------')
  /* console.log(req.path)
    //  从请求中获取token
  var token = req.headers['authorization']
    // 校验token有效性
  if (token) {
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return res.status(403).send({
          status: 403,
          message: 'Failed to authenticate token.'
        })
      } else {
        // token校验正确,保存decoded传递给其他路由使用
        req.decoded = decoded
        next()
      }
    })
  } else {
    // 不存在token，返回403
    return res.status(403).send({
      status: 403,
      message: 'No token provided'
    })
  } */

}

// app.use('/api/authenticate', [userRouter]) // 登陆认证路由，必须放在token认证之前

router.get('/', authenticate) //  token认证中间件,放在所有需要token保护的路由前
// app.use('/api', [ utilRouter, protectetUserRouter ])

export default router 

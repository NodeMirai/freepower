/**
 * 总的路由管理文件，目录下其他路由实例都会引入该模块下
 */

import article from './article/article'
import user from './user/user'
import jwt from 'jsonwebtoken'
import config from '../config'

function authenticate(req, res, next) {
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
  }

}

// use使用顺序非常重要，路由匹配时会根据use的先后顺序一次匹配
export default app => {
  app.use('/api/authenticate', user)  // 登陆认证路由，必须放在token认证之前
  app.use(authenticate)  //  token认证中间件,放在所有需要token保护的路由前
  app.use('/api', [article])
}

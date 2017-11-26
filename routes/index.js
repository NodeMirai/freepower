/**
 * 总的路由管理文件，目录下其他路由都会引入该模块下
 */

import article from './article/article'
import user from './user/user'

export default app => {
  app.use('/article', article)
  app.use('/user', user)
}

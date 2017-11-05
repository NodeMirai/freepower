/**
 * 文章controller，经过路由后跳转至该模块中
 * crud操作
 */

import ArticleModel from '../model/article'

console.log(ArticleModel)

const ArticleController = {
  getAllArticles(req, res, next) {
    let data = ArticleModel.find((err, articles) => {
      if (err) console.error(err)
      console.log(articles)
      return res.send(articles)
    })
  },

  // 新增文章
  insertOne(req, res, next) {
    let article = req.body
    
    ArticleModel.createarticle( ,(err, article) => {
      // 从req的body中获取插入数据，根据获取数据创建实例并插入数据库
      console.log(article)
      res.end()
    })
  },

  // 删除全部文章
  deleteAll(req, res, next) {
    ArticleModel.remove(function(err) {
      if (err) console.error(err)
      res.send('delete successed')
    })
  },

  // 删除单个文章
  deleteOne(req, res, next) {
    // 获取删除id，根据id删除数据
    let type = req.query.type
    
    ArticleModel.deleteOne({ type }, (err) => {
      res.send('delete success')
    })
  },

  // 更新单个文章
  updateOneAndReturn(req, res, next) {
    let query = req.query.id

    ArticleModel.findOneAndUpdate(query, update, () => {
      res.send('update success')
    })
  },
}

export default ArticleController

/**
 * 文章controller，经过路由后跳转至该模块中
 * crud操作
 */

import ArticleModel from '../model/article'

const ArticleController = {
  getAllArticles(req, res, next) {
    let data = ArticleModel.find((err, articles) => {
      if (err) console.error(err)

      return res.send({
        status: 200,
        message: '查询数据成功',
        data: articles
      })
    })
  },

  // 新增文章
  insertOne(req, res, next) {
    let article = req.body
    ArticleModel.create( article ,(err, article) => {
      if (err) {
        console.error(err)
      }
      // 从req的body中获取插入数据，根据获取数据创建实例并插入数据库
      res.send({
        status: 200,
        message: 'post success'
      })
    })
  },

  // 删除全部文章
  deleteAll(req, res, next) {
    ArticleModel.remove(function(err) {
      if (err) console.error(err)
      res.send({
        status: 200,
        message: 'delete all successed'
      })
    })
  },

  // 删除单个文章
  deleteOne(req, res, next) {
    // 获取删除id，根据id删除数据
    let _id = req.params.id
    ArticleModel.deleteOne({ _id }, (err) => {
      res.send({
        status: 200,
        message: 'delete success'
      })
    })
  },

  // 更新单个文章
  updateOneAndReturn(req, res, next) {
    let query = req.body
    console.log(query)
    ArticleModel.findOneAndUpdate({_id: query.id}, { title: query.title, content: query.content }, () => {
      res.send({
        status: 200,
        message: 'update success'
      })
    })
  },
}

export default ArticleController

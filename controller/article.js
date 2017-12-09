/**
 * 文章controller，经过路由后跳转至该模块中
 * crud操作
 */

import ArticleModel from '../model/article'

export const protectedArticleController = {

  addArticle(req, res, next) {
    let article = req.body
    ArticleModel.create( { ...article, userId: req.decoded.admin } ,(err, article) => {
      if (err) {
        console.error(err)
      }
      res.send({
        status: 200,
        message: 'post success'
      })
    })
  },

  deleteArticle(req, res, next) {
    let _id = req.params.id
    console.log(_id)
    ArticleModel.findOneAndUpdate({ _id, userId: req.decoded.admin }, {  isDelete: 1  },(err) => {
      res.send({
        status: 200,
        message: 'delete success'
      })
    })
  },

  updateArticle(req, res, next) {
    let query = req.body
    console.log(query)
    ArticleModel.findOneAndUpdate({_id: query.id, userId: req.decoded.admin }, { title: query.title, content: query.content }, () => {
      res.send({
        status: 200,
        message: 'update success'
      })
    })
  },
}

export const ArticleController = {
  getAllArticles(req, res, next) {
    let searchData = { isDelete: 0 }
    if (req.decoded) {
      searchData.userId = req.decoded.admin
    }
    let data = ArticleModel.find(searchData, (err, articles) => {
      if (err) console.error(err)

      return res.send({
        status: 200,
        message: '查询数据成功',
        data: articles
      })
    })
  },
}

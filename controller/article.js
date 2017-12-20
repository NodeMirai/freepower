/**
 * 文章controller，经过路由后跳转至该模块中
 * crud操作
 */
import mongoose from 'mongoose'
import ArticleModel from '../model/article'
import UserModel from '../model/user'
import article from '../model/article';

export const protectedArticleController = {

  getAllArticleByUserId(req, res, next) {
    let searchData = {
      isDelete: 0,
      user: req.decoded.admin,
    }
    console.log(searchData)
    let data = ArticleModel.find(searchData, (err, articles) => {
      if (err) console.error(err)
      res.send({
        status: 200,
        message: '查询数据成功',
        data: articles
      })
    })
  },

  addArticle(req, res, next) {
    let article = req.body
    ArticleModel.create({...article, user: mongoose.Types.ObjectId(req.decoded.admin) }, (err, article) => {
      if (err) {
        console.error(err)
        res.send({
          status: 500,
          message: err
        })
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
    ArticleModel.findOneAndUpdate({ _id, user: req.decoded.admin }, { isDelete: 1 }, (err) => {
      res.send({
        status: 200,
        message: 'delete success'
      })
    })
  },

  updateArticle(req, res, next) {
    let query = req.body
    console.log(query)
    ArticleModel.findOneAndUpdate({ _id: query.id, user: req.decoded.admin }, query, () => {
      res.send({
        status: 200,
        message: 'update success'
      })
    })
  },
}

export const ArticleController = {
  getAllArticles(req, res, next) {
    // 关联用户与文章信息查询
    ArticleModel.find()
      .populate('user', 'nickname avatar')
      .exec((err, articleList) => {
        if (err) {
          console.error(err)
          res.send({
            status: 500,
            message: "get articles failed"
          })
        } else {
          console.log(articleList)
          res.send({
            status: 200,
            message: "get articles success",
            data: articleList,
          })
        }
      })
  },
  getArticleById(req, res, next) {
    let articleId = req.params.articleId
    console.log(articleId)
    ArticleModel.findById(articleId, (err, article) => {
      if (err) {
        console.error(err)
        res.send({
          status: 500,
          message: 'get article failed',
        })
      } else {
        res.send({
          status: 200,
          data: article
        })
      }
    })
  },
}
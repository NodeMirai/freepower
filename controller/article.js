/**
 * 文章controller，经过路由后跳转至该模块中
 * crud操作
 */
import mongoose from 'mongoose'
import ArticleModel from '../model/article'
import UserModel from '../model/user'

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
    ArticleModel.create({ ...article, user: mongoose.Types.ObjectId(req.decoded.admin) }, (err, article) => {
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
    ArticleModel.findOneAndUpdate({ _id: query.id, user: req.decoded.admin }, { title: query.title, content: query.content }, () => {
      res.send({
        status: 200,
        message: 'update success'
      })
    })
  },
}

export const ArticleController = {
  getAllArticles(req, res, next) {
    ArticleModel.findOne({ title: "test" }, (err, user) => {
      console.log(user)
    })
    // 关联用户与文章信息查询
    ArticleModel.findOne({ title: "test" })
        .populate('user',)
        .exec((err, doc) => {
          console.log(err)
          console.log(doc)
          res.send({
            status: 200
          })
        })
    /* ArticleModel.findUserInfoByArticleId(function(err, list) {
      console.log(list)
      if (list) {
        res.send({
          status: 200,
          message: 'find success'
        })
      } else {
        res.send({
          status: 500,
          message: 'find failed'
        })
      }
    }) */
  },
}

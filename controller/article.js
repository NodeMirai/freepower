/**
 * 文章controller，经过路由后跳转至该模块中
 * crud操作
 */

import ArticleModel from '../model/article'

console.log(ArticleModel)

const Article = {
  getAllArticles(req, res, next) {
    let data = ArticleModel.Article.find((err, articles) => {
      if (err) console.error(err)
      console.log(articles)
      return res.send(articles)
    })
  },
  insertOne(req, res, next) {
    ArticleModel.article.save((err, article) => {
      console.log(article)
      res.end()
    })
  }
}

export default Article

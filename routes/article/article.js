/**
 * 文章模块，实现基本增删改查
 */
import express from 'express'
import { protectedArticleController, ArticleController } from '../../controller/article'

export const protectetArticleRouter = express.Router()
export const articleRouter = express.Router()

articleRouter.get('/article', ArticleController.getAllArticles)
protectetArticleRouter.post('/article', protectedArticleController.addArticle)
protectetArticleRouter.delete('/article/:id', protectedArticleController.deleteArticle)
protectetArticleRouter.put('/article', protectedArticleController.updateArticle)

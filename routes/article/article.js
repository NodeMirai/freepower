/**
 * 文章模块，实现基本增删改查
 */
import express from 'express'
import article from '../../controller/article'

const router = express.Router()

router.get('/article', article.getAllArticles)
router.post('/article', article.addArticle)
router.delete('/article/:id', article.deleteArticle)
router.put('/article', article.updateArticle)

export default router

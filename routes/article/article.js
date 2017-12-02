/**
 * 文章模块，实现基本增删改查
 */
import express from 'express'
import article from '../../controller/article'

const router = express.Router()

router.get('/article', article.getAllArticles)
router.post('/article', article.insertOne)
router.delete('/article/id', article.deleteOne)
router.put('/article', article.updateOneAndReturn)

export default router

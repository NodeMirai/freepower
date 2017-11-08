/**
 * 文章模块，实现基本增删改查
 */
import express from 'express'
import article from '../../controller/article'

const router = express.Router()

router.get('/', article.getAllArticles)
router.post('/', article.insertOne)
router.delete('/id', article.deleteOne)
router.put('/id', article.updateOneAndReturn)

export default router

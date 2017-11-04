/**
 * 文章模块，实现基本增删改查
 */
import express from 'express'
import article from '../../controller/article'

const router = express.Router()

router.get('/article', article.getAllArticles)
router.get('/insertOne', article.insertOne)

export default router

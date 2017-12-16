/**
 * article模型层，负责与数据库之间进行交互
 */

import mongoose from 'mongoose'

const Schema = mongoose.Schema

const articleSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  title: String,
  datetime: Date,
  type: String,  // 文章分类，未来需要做文章的分类
  content: String,
  commit: String,     // 评论，与其他用户相关，待定
  words: Number,  // 字数
  readCounts: Number,  // 阅读次数
  isDelete: {type: Number, default:0},  // 1表示删除  0表示未删除
  userId: String,  // 用户id
})

articleSchema.statics = {
  findUserInfoByArticleId: function(callback) {
    return this 
      .find({})
      .populate('userId')
      .exec(callback)
  }
}

let Article = mongoose.model('Article', articleSchema)

export default Article

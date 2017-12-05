/**
 * article模型层，负责与数据库之间进行交互
 */

import mongoose from 'mongoose'

const Schema = mongoose.Schema

const articleSchema = new Schema({
  title: String,
  datetime: Date,
  type: String,
  content: String,
  // commit:      与其他用户相关，待定
  words: Number,
  readCounts: Number, 
  isDelete: {type: Number, default:0},  // 1表示删除  0表示未删除
})

let Article = mongoose.model('Article', articleSchema)

export default Article

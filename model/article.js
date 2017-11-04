/**
 * article模型层，负责与数据库之间进行交互
 */

import mongoose from 'mongoose'

const Schema = mongoose.Schema

const articleSchema = new Schema({
  title: String,
  datetime: Date,
  type: String,
  // commit:      与其他用户相关，待定
  words: Number,
  readCounts: Number, 
})

const Article = mongoose.model('Article', articleSchema)

const article = new Article({
  title: 'test',
  datetime: new Date(),
  type: 'happy',
  words: 40,
  readCounts: 50,
})

export default { 
  Article,
  article
}

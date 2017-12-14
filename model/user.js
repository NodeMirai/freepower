/**
 * 用户Model，负责用户信息crud
 */

import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  nickname: String,
  avatar: String,
  sex: Number,
  introduce: String,
  birthday: { type: Date, default: new Date(1990, 6, 1) },
  age: Number,
  loginTime: { type: Date, default: Date.now },
  isDelete: { type: Number, default: 0 }, // 1表示删除  0表示未删除 
})

const UserModel = mongoose.model('user', userSchema)

export default UserModel
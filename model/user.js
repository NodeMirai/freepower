/**
 * 用户Model，负责用户信息crud
 */

import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: { type: String, required: true},
  password: { type: String, required: true},
  nickname: String,
  avatar: String,
  sex: Number,
  introduce: String,
  birthday: Date,
  age: Number,
  loginTime: { type: Date, default: Date.now },
})

const UserModel = mongoose.model('user', userSchema)

export default UserModel

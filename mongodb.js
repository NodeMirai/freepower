import mongoose from 'mongoose'
import config from './config'

const db = mongoose.connection

let url = process.env.NODE_ENV === 'production' ? config.proDBUrl : url = config.devDBUrl

mongoose.connect(url, {
  useMongoClient: true,
})

db.once('open', () => {
  console.log('数据库连接成功')
})

// 连接错误时断开连接
db.on('error', (error) => {
  console.error('error in mongodb connection' + error)
  mongoose.disconnect();
})

// 数据库断开时，重新连接数据库
db.on('close', () => {
  console.log('数据库断开连接，重新连接数据库')
  mongoose.connect(config.url, { server: { auto_reconnect: true } })
})

export default db

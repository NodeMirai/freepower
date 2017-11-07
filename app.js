import express from 'express'
import db from './mongodb'   // mongoose连接在程序开始时就执行，直到程序结束
import router from './routes/index'  
import config from './config'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// 挂载全部模块路由
router(app)

// 启动服务
app.listen(config.port)

import Koa from 'koa'
import fs from 'fs'
// import mongoose from 'mongoose'
// import db from './mongodb'   // mongoose连接在程序开始时就执行，直到程序结束
import router from './routes/index'  
import bodyParser from 'koa-bodyparser'
import morgan from 'koa-morgan'

import config from './config'

const app = new Koa()

/**
 * configuration
 */
const port = process.env.PORT || config.port
app.context.superSecret = config.secret   // global secret variable

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser())

// use morgan to log requests to the console
// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(__dirname + '/access.log',{ flags: 'a' })
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

// 挂载全部模块路由
app.use(router.routes()).use(router.allowedMethods())

// 启动服务
app.listen(port)

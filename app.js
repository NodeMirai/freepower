import express from 'express'
import mongoose from 'mongoose'
import db from './mongodb'   // mongoose连接在程序开始时就执行，直到程序结束
import router from './routes/index'  
import bodyParser from 'body-parser'
import morgan from 'morgan'

import config from './config'

const app = express()

/**
 * configuration
 */
const port = process.env.PORT || config.port
app.set('superSecret', config.secret)   // secret variable

// cors解决跨域问题
/* app.all('*', (req, res, next) => {
	res.header("Access-Control-Allow-Origin", req.headers.origin || '*');
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  	res.header("Access-Control-Allow-Credentials", true); //可以带cookies
	res.header("X-Powered-By", '3.2.1')
	if (req.method == 'OPTIONS') {
	  	res.send(200);
	} else {
	    next();
	}
}); */


// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// use morgan to log requests to the console
app.use(morgan('dev'))

// 挂载全部模块路由
router(app)

// 启动服务
app.listen(port)

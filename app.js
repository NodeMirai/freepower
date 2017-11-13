import express from 'express'
import mongoose from 'mongoose'
import db from './mongodb'   // mongoose连接在程序开始时就执行，直到程序结束
import router from './routes/index'  
import config from './config'
import bodyParser from 'body-parser'

const port = process.env.PORT || config.port
let url = process.env.NODE_ENV === 'production' ? config.proDBUrl : url = config.devDBUrl

mongoose.connect(url, {
  useMongoClient: true,
})

const app = express()

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

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// 挂载全部模块路由
router(app)

// 启动服务
app.listen(port)

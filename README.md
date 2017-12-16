# tdd-restful
## 2017-11-04学习内容
1、在Nodejs与mongoose中常用做法为，当程序开始执行时就打开数据库连接，并且保持到程序结束
mongoose的auto_reconnect与disconnect作用

2、路由如何实现模块化划分
express.Router()可以返回一个路由句柄，该句柄可挂在到app.use中，即可实现模块化路由(大路由/子路由)

3、mongoose中Schema的static静态方法等价于java中service层对dao层的封装
疑问：静态方法与每个实例对象的方法之间的区别(mongoose中Schema的prototype与static之间的区别)

4、如何在node中使用es6  
balel-register模块：将node的入口文件引入后，通过babel对es6转化为es5
http://cnodejs.org/topic/56460e0d89b4b49902e7fbd3
babel6 = balel-core + 插件(
    babel-preset-es2015, babel-preset-stage3, 
    "babel-plugin-transform-async-to-generator": "^6.24.1",
    "babel-plugin-transform-es2015-classes": "^6.24.1",
    "babel-plugin-transform-es2015-modules-commonjs": "^6.24.1",
    "babel-plugin-transform-export-extensions": "^6.22.0"
)

5、es6模块化语法注意事项  
- import有两种引入方式，一种是引入export default的默认导出，此时不需要使用import {} from 的形式，另一种是引入模块中明确的接口即import {}
- export default方式导出时不需要声明与赋值，非default方式导出时必须写明__变量声明与赋值__(例如export const hehe = 'hehe'，缺少=或者const声明都是错误的)

### 问题记录
1. await与async如何解决回调问题
2. es6类与继承写法练习
3. promise写法练习
4. 静态方法与实例方法区别

## 2017-11-05
### 目标
1. 完成article的crud接口  
- 为express添加body-parser中间件来提供请求体解析与urlencode(encode与decode)

2. article接口改为restful形式(参考公司文档)

3. 添加superior来保证对服务器文件变化的实时更新

4. 为article接口添加单元测试(chai，mocha)
- describe表示一个测试套件，代表一个测试任务
- it表示一个测试用例，表示测试内容的最小单位，describe内部至少有一个it

## 2017-11-07
### 目标
1. 完成article接口单元测试
- __mocha测试mongoose__链接数据库基本操作注意事项：
- 首先需要保证mongoose链接数据库成功
- 链接成功后，必须在每个实体的crud测试中，引入mongoose生成schame与model，否则

2. 前段对接crud接口完成
- 接口返回状态，成功20X，重定向相关30X,客户端错误40X,服务端错误50x

## 2017-11-13
### 目标
1. 添加dev与pro两种环境控制
app.js中通过process.env.NODE_ENV获取传入的环境名，默认之后为'development'
命令如下：
- linux & mac: export NODE_ENV=production
- windows: set NODE_ENV=production
dev: 使用本地mongodb数据库ip，端口号为12345
pro: 使用127.0.0.1,端口号为27017

2. 添加制定port运行方式
app.js中通过process.env.PORT获取命令行中指定的端口号  
命令如下：PORT=1234 node index.js

## 2017-11-26
### 单元测试
- 时model引入报错提示：model中缺少function原因,ES6模块化与commonJS不可以混用，可能会出现__导入导出时内容莫名被过滤的__奇怪的情况(应该追一下源码查看原因)
- 每次测试时必须打开新的mongoose链接(mongoose.connect)

### express router分散整合
- 通过express.router()生成的实例实现模块化路由
- 通过express().use(router)收集所有模块化路由，实现路由合并

## 20171201
### 添加token验证
1. 安装jsonwebtoken模块与morgn(log request to console)
2. 配置文件中新增secret项：used when we create and verify JSON Web Tokens

### 添加morgan帮助查看请求日志
### USER密码不可直接以文本形式存储，应该存储hash后的值
### api接口格式修改
1. 认证接口前缀为/api/authenticate/，主要为用户数据相关操作，__后期要将认证与USER逻辑分离__
2. 非认证接口均已/api/为前缀，api后的第一个单词为__表名__
3. nginx负载均衡的其他接口格式待定

## 20171209
### 文章表添加用户字段
### 文章查询接口分为两种，全部查询与工具登陆用户id查询
1. 全部查询需要文章与用户表关联查询，用于首页基本展示
2. 根据用户id查询文章列表用于个人中心用户编辑查看

### 新增文章接口添加用户信息

### 问题记录
1. 后端如果在每次请求中获取请求用户的信息
方案1: 将用户id作为token一部分，每次获取验证token正确性时可以将用户id解析出来，达到获取用户id的目的，然后使用id查询用户信息

## 2017-12-14
### 添加文件上传接口 multer
1. 安装multer模块用于文件上传
2. 生成文件名后，将图片url存入数据库

## 2017-12-16
### 首页文章与用户信息连接查询
1. mongoose如何关联查询

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

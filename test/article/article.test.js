var expect = require('chai').expect
import db from '../../mongodb'
import ArticleModel from '../../model/article'

/**
 * 所有接口结果都为异步操作，it默认2000毫秒不反回则视为报错
 * 因此在执行mocha命令时需要使用-t添加延时时间
 */
// 为article的crud添加一个测试套件

describe('article crud', function () {
 
  var testArticle = {
    title: 'test_title',
    content: 'test_content',
    datetime: '2017-11-07'
  }

  // 为保证测试准确，先清空数据库
  /* before(function () {
    const Schema = mongoose.Schema
    
    const articleSchema = new Schema({
      title: String,
      datetime: Date,
      type: String,
      // commit:      与其他用户相关，待定
      words: Number,
      readCounts: Number, 
    })
    
    ArticleModel = mongoose.model('Article', articleSchema)
    
  }) */

  // 添加一个article
  it('新增一个文章对象，和插入成功对象一致则通过', function () {
    ArticleModel.create(testArticle, function (err, doc) {
      expect(doc).to.be.deep.equal(testArticle)
    })
  })

  // 查询刚刚添加的是否存在
  it('查询对象为目标对象则通过', function () {
    ArticleModel.findOne({ title: 'test_title', }, function (err, doc) {
      expect(doc).to.be.deep.equal(testArticle)
    })
  })

  // 修改
  it('修改title为hehe', function () {
    ArticleModel.findOneAndUpdate({ title: 'test_title' }, { title: 'hehe' }, function (err, doc) {
      testArticle.title = 'hehe'
      expect(doc).to.be.deep.equal(testArticle)
    })
  })

  // delete
  it('删除库中指定记录', function () {
    ArticleModel.findOneAndRemove({ title: 'hehe' }, function (err, doc) {
      expect(doc).to.be.deep.equal(testArticle)
    })
  })


})

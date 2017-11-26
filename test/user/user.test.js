import UserModel from '../../model/user'
import chai from 'chai'
import db from '../../mongodb'

let expert = chai.expect

describe('user crud', function() {

  let testUser = {
    username: '小狼',
    password: '123456'
  }

  it('insert user', function() {
    // create：如果不存在对应model值的collection，会创建一个collection，同时将对象插入到collection中
    UserModel.create(testUser, function(err, doc) {
      console.log(doc)
      expect(doc).to.be.deep.equal(testArticle)
    })
  })

  it('findOne', function() {
    // findOne返回所有查找结果中的第一个结果
    UserModel.findOne({ username: '小狼' }, function(err, doc) {
      console.log(doc)
    })
  })

  it('findAll', function() {
    // findOne返回所有查找结果中的第一个结果
    UserModel.find({ username: '小狼' }, function(err, doc) {
      console.log(doc)
    })
  })

})

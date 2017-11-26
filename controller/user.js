/**
 * 
 */

import UserModel from '../model/user'

const UserController = {

  findUserByUserName(req, res, next) {
    let username = req.params.username
    UserModel.findOne({ username }, (err, doc) => {
      if (err) {
        console.error(err)
        res.send({
          status: 500
        })
      }
      res.send({
        status: 200,
        data: doc,
        message: 'get one success',
      })
    })
  },

  addUser(req, res, next) {
    let user = req.body
    UserModel.create(user, (err, doc) => {
      if (err) {
        console.error(err)
        res.send({
          status: 500
        })
      }
      res.send({
        status: 200,
        data: doc,
        message: 'add success',
      })
    })
  }

}

export default UserController

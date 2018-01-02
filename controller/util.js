/**
 * 工具接口
 */
import config from '../config'
import UserModel from '../model/user'

import fs from 'fs'

const UtilController = {
  uploadFile(req, res, next) {
    let file = req.file
    console.log('文件类型：%s', file.mimetype);
    console.log('原始文件名：%s', file.originalname);
    console.log('文件大小：%s', file.size);
    console.log('文件保存路径：%s', file.path);
    let staticPath = config.static + 'img/' + file.originalname
    let resourceUrl = config.resource + 'img/' + file.originalname
    console.log(staticPath)
    console.log(resourceUrl)
    fs.writeFile(staticPath, file.buffer, (err) => {
      if (err) throw err

      // 将头像名称更新到用户信息中  后期需要将该部分分离
      UserModel.findOneAndUpdate({ _id: req.decoded.admin }, { avatar: resourceUrl }, (err, user) => {
        if (err) throw err
        console.log(user)

        res.send({
          status: 200,
          data: resourceUrl
        });
      })


    })
  }
}

export default UtilController
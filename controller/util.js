/**
 * 工具接口
 */
import config from '../config'

import fs from 'fs'

const UtilController = {
  uploadFile(req, res, next) {
    let file = req.file
    console.log('文件类型：%s', file.mimetype);
    console.log('原始文件名：%s', file.originalname);
    console.log('文件大小：%s', file.size);
    console.log('文件保存路径：%s', file.path);
    fs.writeFile(config.static + file.originalname, file.buffer, (err) => {
      if (err) throw err
      res.send({ ret_code: '0' });
    })
  }
}

export default UtilController
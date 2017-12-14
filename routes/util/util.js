import express from 'express'
import multer from 'multer'

import UtilController from '../../controller/util'

const upload = multer({ dist: './' })

export const utilRouter = express.Router()

utilRouter.post('/upload', upload.single('file'), UtilController.uploadFile)
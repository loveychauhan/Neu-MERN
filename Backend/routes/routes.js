import express from 'express'
import { home, login } from '../controller/admin.js'
import { list, productList } from '../controller/products.js'
import multer from 'multer'
const upload = multer()


const appRouter = express.Router()
appRouter.post('/login', login)
appRouter.get('/', home)
appRouter.get('/list', list)
appRouter.post('/sendData', upload.array('image', 4), productList)

export default appRouter


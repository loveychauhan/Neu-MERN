import express from 'express'
import { home, login } from '../controller/admin.js'
import { list, productList } from '../controller/products.js'
import upload from '../utitlity/multer.js'


const appRouter = express.Router()
appRouter.post('/login', login)
appRouter.get('/', home)
appRouter.get('/list', list)
appRouter.post('/sendData', upload.array('image', 4), productList)

// appRouter.post('/sendData', upload.fields([{
//     'name':, maxCount: 1
// }]), productList)

export default appRouter


import express from 'express'
import { home, login, signUp } from '../controller/admin.js'
import { list, productList } from '../controller/products.js'
import upload from '../utitlity/multer.js'
import AuthUser from '../middleware/AuthUser.js'
import { cartItem } from '../controller/cartController.js'


const appRouter = express.Router()

appRouter.post('/login', login)
appRouter.post('/signUp', signUp)
appRouter.get('/', home)
appRouter.get('/list', list)
appRouter.post('/sendData', upload.array('image', 4), productList)
appRouter.post('/cartItem', AuthUser, cartItem)

// appRouter.post('/sendData', upload.fields([{
//     'name':, maxCount: 1
// }]), productList)

export default appRouter


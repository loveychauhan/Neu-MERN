import express from 'express'
import { home, login, signUp } from '../controller/admin.js'
import { list, productList } from '../controller/products.js'
import upload from '../utitlity/multer.js'
import AuthUser from '../middleware/AuthUser.js'
import { cartItem, getCartItem, updateCartItem } from '../controller/cartController.js'
import { placeOrder, razorPay } from '../controller/paymentController.js'


const appRouter = express.Router()

appRouter.post('/login', login)
appRouter.post('/signUp', signUp)
appRouter.post('/', home)
appRouter.get('/list', list)
appRouter.post('/sendData', upload.array('image', 4), productList)
appRouter.post('/cartItem', AuthUser, cartItem)
appRouter.post('/updateCartItem', AuthUser, updateCartItem)
appRouter.post('/getCartItem', AuthUser, getCartItem)
appRouter.post('/place-order', AuthUser, placeOrder)
appRouter.post('/razorPay', AuthUser, razorPay)

// appRouter.post('/sendData', upload.fields([{
//     'name':, maxCount: 1
// }]), productList)

export default appRouter


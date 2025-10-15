import express from 'express'
import AuthUser from '../middleware/AuthUser.js'
import { productList } from '../controller/productsController.js'
import { cartItem, getCartItem, updateCartItem } from '../controller/cartController.js'

const cartRoutes = express.Router()

cartRoutes.post('/cartItem', AuthUser, cartItem)
cartRoutes.post('/updateCartItem', AuthUser, updateCartItem)
cartRoutes.post('/getCartItem', AuthUser, getCartItem)


export default cartRoutes
import express from 'express'
import AuthUser from '../middleware/AuthUser.js'
import { placeOrder } from '../controller/paymentController.js'
import { orders } from '../controller/admin.js'
import { createRazorpayOrder } from '../config/razorpay.js'

const paymentRoutes = express.Router()

paymentRoutes.post('/placeorder', AuthUser, placeOrder)
paymentRoutes.post('/razorPay', AuthUser, createRazorpayOrder)
paymentRoutes.post('/orders', AuthUser, orders)


export default paymentRoutes

import express from 'express'
import { productList } from '../controller/productsController.js'
import upload from '../utitlity/multer.js'
import { showOrderItem } from '../controller/admin.js'
import AuthUser from '../middleware/AuthUser.js'

const appRoutes = express.Router()

appRoutes.post('/sendData', upload.array('image', 4), productList)

//admin page
appRoutes.post('/show-order', AuthUser, showOrderItem)



export default appRoutes
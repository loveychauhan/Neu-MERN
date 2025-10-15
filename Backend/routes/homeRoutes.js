import express from 'express'
import { home, login, signUp } from '../controller/admin.js'
import { list, productList, } from '../controller/productsController.js'



const homeRoutes = express.Router()
// const appRouter = express.Router()


homeRoutes.post('/login', login)
homeRoutes.post('/signUp', signUp)
homeRoutes.post('/', home)



// appRouter.get('/list', list)




// appRouter.post('/sendData', upload.fields([{
//     'name':, maxCount: 1
// }]), productList)

export default homeRoutes


import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDb from "./config/db.js"
import cloudinaryUpload from "./config/cloudinary.js"
import cartRoutes from "./routes/cartRoutes.js"
import homeRoutes from "./routes/homeRoutes.js"
import paymentRoutes from "./routes/paymentRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"

// config
const app = express()
dotenv.config()

// MiddleWare
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Connection 
connectDb()

//cloudinary
cloudinaryUpload()


// Routing
app.use(homeRoutes)
app.use(cartRoutes)
app.use(paymentRoutes)
app.use(adminRoutes)

// app.get("/", (req, res) => {
//     res.send('home')
// })


// Listening
app.listen(process.env.port, () => {
    console.log(`server is running at ${process.env.port}`)
})
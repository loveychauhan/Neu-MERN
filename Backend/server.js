import express from "express"
import appRouter from "./routes/routes.js"
import dotenv from "dotenv"
import cors from "cors"
import connectDb from "./config/db.js"
import cloudinaryUpload from "./config/cloudinary.js"

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
app.use(appRouter)


// Listening
app.listen(process.env.port, () => {
    console.log(`server is running at ${process.env.port}`)
})
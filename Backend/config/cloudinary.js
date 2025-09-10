import { v2 as cloudinary } from 'cloudinary'
import dotenv from "dotenv"
dotenv.config()

console.log('env', process.env.cloud_name)
async function cloudinaryUpload() {
    cloudinary.config({
        cloud_name: "drv6vorri",
        api_key: process.env.api_key,
        api_secret: process.env.api_secret
    });
}

export default cloudinaryUpload

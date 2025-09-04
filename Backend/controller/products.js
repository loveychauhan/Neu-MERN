import { productA } from "../models/product.js"
import { v2 as cloudinary } from 'cloudinary'

export const list = async (req, res) => {
    const productList = await productA.find()
    res.send(productList)
}

export const productList = async (req, res) => {
    const recievedData = req.body
    const uploadedImage = req.body.image
    console.log(uploadedImage)
    res.status(200).json({ success: true, data: recievedData, image: uploadedImage });
}

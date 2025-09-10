import { v2 as cloudinary } from 'cloudinary';
import { productA } from "../models/product.js";

export const list = async (req, res) => {
    const productList = await productA.find();
    res.send(productList);
};

export const productList = async (req, res) => {
    const receivedData = req.body;
    console.log(req.headers)
    const images = req.files

    // console.log(images)



    const ImageUrl = await Promise.all(
        images.map((image) => {
            return cloudinary.uploader.upload(image.path)
        }
        ))



    // console.log(ImageUrl)


    res.status(200).json({
        success: true,
        data: receivedData,
    });
};

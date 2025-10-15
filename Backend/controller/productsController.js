import { v2 as cloudinary } from 'cloudinary';
import { productA } from "../models/product.js";
import { v4 as uuidv4 } from "uuid";


export const list = async (req, res) => {
    const productList = await productA.find();
    res.send(productList);
};

export const productList = async (req, res) => {
    const formData = req.body
    const { name, bestseller, category, description, price, sizes, subCategory } = formData;
    const images = req.files
    try {
        const ImageUrl = await Promise.all(
            images.map((image) => {
                return cloudinary.uploader.upload(image.path)
            }
            ))

        const imageUrlList = ImageUrl?.map((img) => img.secure_url)
        const parsedSizes = JSON.parse(sizes);
        await productA.create({
            _id: uuidv4(),
            name,
            subCategory, price, description, bestseller, category, sizes: parsedSizes, image: imageUrlList
        })


        res.status(200).json({
            success: true,
            data: formData,
            img: imageUrlList
        });
    } catch (error) {
        res.json({ message: 'failed', success: false })
    }

};

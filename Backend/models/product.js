import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    _id: { type: String },
    name: { type: String },
    description: { type: String },
    price: { type: String },
    image: { type: Array },
    category: { type: String },
    subCategory: { type: String },
    sizes: { type: Array },
    date: { type: Date, default: Date.now },
    bestseller: { type: Boolean },
})

export const productA = new mongoose.model('productA', productSchema, 'productlist')
export const productB = new mongoose.model('productB', productSchema, 'products')

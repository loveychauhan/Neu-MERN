import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    _id: { type: String },
    name: { type: String },
    description: { type: String },
    price: { type: String },
    image: { type: Array, default: [] },
    category: { type: String },
    subCategory: { type: String },
    sizes: { type: Array },
    date: { type: Date, default: Date.now },
    bestseller: { type: Boolean },
}, { minimize: false })

export const productA = mongoose.models.productA || mongoose.model('productA', productSchema, 'productlists')

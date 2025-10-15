import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    formData: { type: Object },
    userId: { type: String },
    cartData: { type: Object, default: {} },
    amount: { type: String },
    paymentMethod: { type: String, default: 'cod' },
    paymentStatus: { type: Boolean, default: false },
    date: { type: Date, default: Date.now },
}, { minimize: false })

const orderModel = mongoose.models.orderModel || mongoose.model('orderModel', orderSchema)
export default orderModel
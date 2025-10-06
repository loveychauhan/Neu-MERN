import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    cartData: { type: Object, default: {} }
}, { minimize: false })

const userModel = mongoose.models.userModel || mongoose.model('userModel', userSchema)
export default userModel
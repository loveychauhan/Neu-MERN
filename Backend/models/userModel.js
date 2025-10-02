import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    cartData: { type: Object, default: {} }
})

const userModel = mongoose.model.userModel || mongoose.model('userModel', userSchema)
export default userModel
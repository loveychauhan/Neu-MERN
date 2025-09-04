import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
})

const userModel = mongoose.model('userModel', userSchema)
export default userModel
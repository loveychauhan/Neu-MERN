import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js"

export const placeOrder = async (req, res) => {
    try {
        const { userDetails, cartData, amount, userId } = req.body
        const orderData = { userId, userDetails, cartData, amount, Date: Date.now, paymentMethod: 'cod' }
        const newOrder = new orderModel(orderData)
        await newOrder.save()
        await userModel.findByIdAndUpdate(userId, { cartData: {} })
        res.json({ message: 'payment', success: true })
    } catch (error) {
        res.json({ message: error.message, success: false })
    }

}



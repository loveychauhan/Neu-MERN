import userModel from "../models/userModel.js"

export const cartItem = async (req, res) => {
    try {
        const { userId, id, size } = req.body
        const user = await userModel.findById(userId);
        const cartData = await user.cartData

        if (cartData[id]) {
            if (cartData[id][size] > 0) {
                cartData[id][size] += 1
            } else {
                cartData[id][size] = {}
                cartData[id][size] = 1
            }

        } else {
            cartData[id] = {}
            cartData[id][size] = 1
        }
        await userModel.findByIdAndUpdate(userId, { cartData })
        res.json({ message: 'cart item added successfully', success: true })
    } catch (error) {
        return res.json({ message: error.message, success: false })
    }

}

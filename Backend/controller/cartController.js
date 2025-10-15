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
        res.json({ message: 'cart item added successfully', success: true, cartData })
    } catch (error) {
        return res.json({ message: error.message, success: false })
    }

}


export const updateCartItem = async (req, res) => {
    try {
        const { userId, id, size, quantity } = req.body
    
        const userData = await userModel.findById(userId)
        let cartData = userData.cartData || {}

        if (quantity === 0) {
            delete cartData[id][size]
            if (Object.keys(cartData[id]).length === 0) {
                delete cartData[id];
            }

        } else {
            cartData[id][size] = quantity
        }

        await userModel.findByIdAndUpdate(userId, { cartData })

        res.json({ status: 'success', message: 'cart updated' })
    } catch (error) {
        return res.json({ message: error.message, status: 'failure' })
    }
}

export const getCartItem = async (req, res) => {
    const token = req.headers.authorization;
    const { userId } = req.body
    try {
        if (token) {
            const cartData = await userModel.findById(userId)
            const fetchedCartData = cartData.cartData
            res.json({ message: 'success', cartData: fetchedCartData })
        }
    } catch (error) {
        console.log(error)
    }



}



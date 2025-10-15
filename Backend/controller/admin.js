import userModel from "../models/userModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { productA } from "../models/product.js"
import orderModel from "../models/orderModel.js"

export const home = async (req, res) => {
    const data = await productA.find()
    return res.json({
        message: 'data send',
        productData: data,
    })
}

export const loginGet = (req, res) => {
    res.json({ message: 'this is login page' })
}

export const login = async (req, res) => {
    const { email, password } = req.body

    const user = await userModel.findOne({ email })

    if (!user) {
        return res.json({ message: 'User not exist' })
    }

    bcrypt.compare(password, user.password, function (err, result) {
        if (err) {
            return res.json({ message: "password did not match" })
        }

        const token = jwt.sign({ message: 'user password is correct ', user: user }, 'lovey')
        res.json({ message: 'user Login successfully', token, user })
    })

}


export const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body

        const user = await userModel.findOne({ email })

        if (user) return res.json({ message: 'User already exist' })

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = await userModel.create({
            name: name,
            email: email,
            password: hashedPassword,
        })

        const createUser = await userModel.findOne({ email })

        const token = jwt.sign({ message: 'user password is correct ', user: createUser }, 'lovey')
        res.json({ message: 'user created successfully', token, user })
    } catch (error) {
        return res.status(500).json({ message: "User creation failed" });
    }

}




export const orders = async (req, res) => {
    const { userId } = req.body
    try {
        const order = await orderModel.find({ userId })
        res.json({ message: 'success', success: true, cartData: order })
    } catch (error) {
        res.json({ message: 'cannot access order now!!', success: false })
    }

}


export const showOrderItem = async (req, res) => {
    const { userId } = req.body
    try {
        const data = await orderModel.find()

        res.json({ message: "order Item send", data: data, userId, status: true })
    } catch (err) {
        res.json({ message: "Order Item failed", status: false })
    }

} 

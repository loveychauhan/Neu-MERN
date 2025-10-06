import userModel from "../models/userModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { productA } from "../models/product.js"

export const home = async (req, res) => {
    const data = await productA.find()
    return res.json({
        message: 'data send',
        productData: data
    })

    // res.send('home page')

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
        res.json({ token: token, message: 'user login successfully', email: email })
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

        res.json({ message: 'user created successfully' })
    } catch (error) {
        return res.status(500).json({ message: "User creation failed" });
    }

}



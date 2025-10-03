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
    console.log(email, password)

    const user = await userModel.findOne({ email })

    // console.log(user)

    if (!user) {
        return res.json({ message: 'User not exist' })
    }

    bcrypt.compare(password, user.password, function (err, result) {
        if (err) {
            return res.json({ message: "password did not match" })
        }

        const token = jwt.sign({ message: 'user password is correct ', password: user.password }, 'lovey')
        res.json({ token: token, message: 'user login successfully' })
    })
}


export const signUp = async (req, res) => {
    const { name, email, password } = req.body
    // console.log(name, email, password)

    const user = await userModel.findOne({ email })

    if (user) return res.json({ message: 'User already exist' })

    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
            if (err) {
                return res.json({ message: 'user cretation failed' })
            }
            userModel.create({
                name: name,
                email: email,
                password: hash
            })

        })
    })
    res.json({ message: 'user created successfully' })
}

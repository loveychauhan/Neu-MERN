import userModel from "../models/userModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const home = async (req, res) => {
    res.send('home')

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
        const token = jwt.sign({ message: 'user password is correct ', password: user.password }, 'lovey')
        res.json({ token: token, message: 'user login successfully' })
    })

}


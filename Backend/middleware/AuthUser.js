import jwt from 'jsonwebtoken'

export default function AuthUser(req, res, next) {
    const authToken = req.headers.authorization
    if (!authToken) {
        return res.json({ message: 'user not Authenticated or Logged In to perform Action.' })
    }

    try {
        const tokenVerify = jwt.verify(authToken, 'lovey')
        // console.log(tokenVerify.user._id)
        req.body.userId = tokenVerify.user._id
        next()
    } catch (error) {
        res.json({ message: error.message, success: false })
    }

}  
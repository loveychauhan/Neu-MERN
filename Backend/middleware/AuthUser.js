export default function AuthUser(req, res, next) {
    const authToken = req.headers.authorization
    if (!authToken) {
        return res.json({ message: 'user not Authenticated or Logged In to perform Action.' })
    }
    res.json({ message: 'Item added' })
    next()
} 
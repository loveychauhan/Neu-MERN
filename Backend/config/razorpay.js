import Razorpay from 'razorpay'


// const razorpay = new Razorpay({
//     key_id: process.env.key_id,
//     key_secret: process.env.key_secret,
// });

export const createRazorpayOrder = async (req, res) => {
    const { userDetails, amount, cartData } = req.body
    console.log(amount)
    res.json({ message: 'razorpay', amount })
}
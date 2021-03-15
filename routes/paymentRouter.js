const express = require('express')

const paymentRouter = express.Router()
const stripe = require('stripe')(process.env.SECRET_TEST_APIKEY);

paymentRouter.post('/', async (req, res) => {

    try {
        console.log('route hit')
        let { status } = await stripe.charges.create({
            amount: req.body.amount,
            currency: 'usd',
            source: req.body.token,
        })
        return res.json({ status })
    } catch (err) {
        console.error(err)
        console.log('router not hit')
        res.status(500).end()
    }
})

module.exports = paymentRouter
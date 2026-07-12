const express = require("express");
const router = express.Router();
const Razorpay = require("razorpay");

// 🔴 replace with your real keys
const razorpay = new Razorpay({
  key_id: "rzp_test_xxxxx",
  key_secret: "xxxxxxxx"
});

router.post("/create-order", async (req, res) => {
  try {
    const options = {
      amount: req.body.amount * 100,
      currency: "INR",
      receipt: "receipt1"
    };

    const order = await razorpay.orders.create(options);
    res.json(order);

  } catch (err) {
    console.log(err);
    res.status(500).send("Error");
  }
});

module.exports = router;
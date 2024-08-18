import dotenv from "dotenv";
dotenv.config();

import crypto from "crypto";

const hmac_sha256 = (data, secret) => {
  const hmac = crypto.createHmac("sha256", secret);
  hmac.update(data);
  return hmac.digest("hex");
};


import { instance } from "./instance.js";

export const checkout = async (req, res) => {
  console.log("inside checkout fun");
  res.header("Access-Control-Allow-Origin", "*");
  var options = {
    amount: Number(req.body.amount * 100), // amount in the smallest currency unit
    currency: "INR",
  };
  const order = await instance.orders.create(options);
  console.log(order);
  res.status(200).json({
    success: true,
    order,
  });
};

export const paymentVerification = async (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;
  const { product_id } = req.query; // Extract product_id from query parameters

  console.log(req.body);

  const generated_signature = hmac_sha256(razorpay_order_id + "|" + razorpay_payment_id, process.env.RAZORPAY_API_SECRET);

  if (generated_signature.toString() === razorpay_signature) {
    res.redirect(`${process.env.FRONTEND_URL}/paymentsuccess?reference=${razorpay_payment_id}&product_id=${product_id}`);
  } else {
    res.status(400).json({
      success: false,
    });
  }
};

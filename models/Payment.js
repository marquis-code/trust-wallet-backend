const mongoose = require("mongoose");
const PaymentSchema = new mongoose.Schema(
  {
    trustId: {
      type: String,
    },
    amount: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    deliveryDuration: {
      type: String,
      required: true,
    },
    reference: {
      type: String,
      required: true,
      unique: true,
    },
    commodities : {
      type : [String],
    },
    status: {
      type: String,
      required: true,
    },
    comments: {
      type : String
    },
    withdrawalStatus : {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
  }
);

const Payment = mongoose.model("Payment", PaymentSchema);

module.exports = Payment;

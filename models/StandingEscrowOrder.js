const mongoose = require("mongoose");
let StandingEscrowOrderSchema = new mongoose.Schema(
    {
        trustId: {
            type: String,
            required: true
        },
        requestingUserTrustId: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true,
        },
        productNarration: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        price: {
            type: Boolean,
            default: false,
        },
        deliveryMethod: {
            type: String,
            enum: ["logX", "alternative"],
            default: "logX",
        },
        productStatus: {
            type: String,
            enum: ["progress", "completed"],
            default: 'pending'
        },
        requestingUser: {
            type: String,
            enum: ["shopper", "freelancer", "dropshipper", "merchant"],
            default: "shopper",
        }
    },
    {
        timestamps: true,
    }
);

const StandingEscrowOrder = mongoose.model("StandingEscrowOrder", StandingEscrowOrderSchema);

module.exports = StandingEscrowOrder;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payments = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    product: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});
const paymentSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    quantitys: {
        type: Number,
        required: true
    },
    paymentId: {
        type: String,
        required: true
    },
    products: {
        type: [productSchema],
        required: true
    }
}, { timestamps: true });
exports.Payments = (0, mongoose_1.model)("payments", paymentSchema);

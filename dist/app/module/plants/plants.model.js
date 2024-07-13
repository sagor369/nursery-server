"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plants = void 0;
const mongoose_1 = require("mongoose");
const plantsSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    categoryId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true
    },
    isDelete: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
exports.Plants = (0, mongoose_1.model)('plants', plantsSchema);

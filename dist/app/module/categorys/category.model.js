"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categorys = void 0;
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isDelete: {
        type: Boolean,
        default: false
    },
    imageUrl: {
        type: String,
        required: true
    }
}, { timestamps: true });
exports.Categorys = (0, mongoose_1.model)("categorys", categorySchema);

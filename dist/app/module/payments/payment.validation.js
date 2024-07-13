"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentValidation = void 0;
const zod_1 = require("zod");
const productZodSchema = zod_1.z.object({
    product: zod_1.z.string(),
    quantity: zod_1.z.number(),
});
exports.paymentValidation = zod_1.z.object({
    userId: zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/), // MongoDB ObjectId validation
    amount: zod_1.z.number(),
    quantitys: zod_1.z.number(),
    paymentId: zod_1.z.string(),
    products: zod_1.z.array(productZodSchema),
});

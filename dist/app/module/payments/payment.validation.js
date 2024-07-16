"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentValidation = void 0;
const zod_1 = require("zod");
const productZodSchema = zod_1.z.object({
    product: zod_1.z.string(),
    quantity: zod_1.z.number(),
    totalAmount: zod_1.z.number(),
});
exports.paymentValidation = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string(),
        quantitys: zod_1.z.number(),
        totalAmount: zod_1.z.number(),
        paymentId: zod_1.z.string(),
        products: zod_1.z.array(productZodSchema),
    }),
});

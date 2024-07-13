"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantsValidation = void 0;
const zod_1 = require("zod");
exports.PlantsValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "Name is required"
        }),
        description: zod_1.z.string({
            required_error: "Description is required"
        }),
        price: zod_1.z.number({
            required_error: "Price is required"
        }).nonnegative({ message: "Price must be a non-negative number" }).min(0, { message: "Price cannot be less than 0" }),
        quantity: zod_1.z.number({
            required_error: "Quantity is required"
        }).int({ message: "Quantity must be an integer" }).nonnegative({ message: "Quantity must be a non-negative number" }).min(0, { message: "Quantity cannot be less than 0" }),
        imageUrl: zod_1.z.string({
            required_error: "Image URL is required"
        }).url({ message: "Invalid URL format" }),
        categoryId: zod_1.z.string({
            required_error: "Image URL is required"
        })
    })
});

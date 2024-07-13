"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryValidation = void 0;
const zod_1 = require("zod");
exports.categoryValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "Name is required" }),
        description: zod_1.z.string({ required_error: "Description is required" }),
        isDelete: zod_1.z.boolean().default(false),
        imageUrl: zod_1.z
            .string({ required_error: "Image URL is required" })
            .url({ message: "Invalid URL format" }),
    }),
});

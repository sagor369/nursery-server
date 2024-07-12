import { z } from "zod";

const productZodSchema = z.object({
    product: z.string(),
    quantity: z.number(),
  });
  
  export const paymentValidation = z.object({
    userId: z.string().regex(/^[0-9a-fA-F]{24}$/), // MongoDB ObjectId validation
    amount: z.number(),
    quantitys: z.number(),
    paymentId: z.string(),
    products: z.array(productZodSchema),
  });
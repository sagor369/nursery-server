import { z } from "zod";

const productZodSchema = z.object({
  product: z.string(),
  quantity: z.number(),
  totalAmount: z.number(),
});

export const paymentValidation = z.object({
  body: z.object({
    email: z.string(),
    quantitys: z.number(),
    totalAmount: z.number(),
    paymentId: z.string(),
    products: z.array(productZodSchema),
  }),
});

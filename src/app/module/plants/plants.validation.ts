import { z } from "zod";

export const PlantsValidation = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required"
    }),
    description: z.string({
      required_error: "Description is required"
    }),
    price: z.number({
      required_error: "Price is required"
    }).nonnegative({ message: "Price must be a non-negative number" }).min(0, { message: "Price cannot be less than 0" }),
    quantity: z.number({
      required_error: "Quantity is required"
    }).int({ message: "Quantity must be an integer" }).nonnegative({ message: "Quantity must be a non-negative number" }).min(0, { message: "Quantity cannot be less than 0" }),
    imageUrl: z.string({
      required_error: "Image URL is required"
    }).url({ message: "Invalid URL format" }),
    categoryId: z.string({
        required_error: "Image URL is required"
      })
  })
});
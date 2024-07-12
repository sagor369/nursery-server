import { z } from "zod";


export const categoryValidation = z.object({
    name: z.string({required_error: "Name is required"}),
    description: z.string({required_error: "Description is required"}),
    isDelete: z.boolean().default(false),
    imageUrl: z.string({required_error: "Image URL is required"}).url({ message: "Invalid URL format" })
  });
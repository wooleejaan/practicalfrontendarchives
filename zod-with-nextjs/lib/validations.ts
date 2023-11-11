import { z } from "zod";

export const checkoutFormSchema = z.object({
  name: z.string().min(3, "Too short").max(25, "Too long").optional(),
  email: z.string().email("Invalid email").optional(),
  phone: z.string().min(10, "Invalid phone number").optional(),
  address: z.string().min(10, "Too short").max(100, "Too long").optional(),
  paymentMethod: z.enum(["cash", "card"]),
});

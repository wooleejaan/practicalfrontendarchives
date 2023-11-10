"use client";

import { z } from "zod";

const cartSchema = z.array(
  z.object({
    id: z.number(),
    quantity: z.number().int().positive(),
  })
);

export default function Cart() {
  const cart: unknown = JSON.parse(localStorage.getItem("cart") || "[]");

  const validatedCart = cartSchema.safeParse(cart);

  if (!validatedCart.success) {
    localStorage.removeItem("cart");
    return;
  }

  console.log(validatedCart.data.map((item) => item.id));
  return <div>Cart</div>;
}

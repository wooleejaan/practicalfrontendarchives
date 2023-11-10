"use client";

import { useEffect } from "react";
import { z } from "zod";

// zod를 사용한다면, 이제 아래와 같이 Product라는 타입을 사용할 필요가 없습니다.
// type Product = {
//   name: string;
//   price: number;
// };

const productSchema = z.object({
  name: z.string(),
  price: z.number().positive(),
  description: z.string().optional(),
});

// 이렇게 zod schema를 사용해 타입을 만들 수 있습니다.
type Product = z.infer<typeof productSchema>;

const getPriceFromProduct = (product: Product) => {
  return product.price;
};

export default function Product() {
  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      //   .then((product: Product) => {
      .then((product: unknown) => {
        // use Zod to validate the product
        const validatedProduct = productSchema.safeParse(product);

        if (!validatedProduct.success) {
          console.error(validatedProduct.error);
          return;
        }

        // use the validatedProduct
        console.log(validatedProduct.data.name, validatedProduct.data.price);
      });
  }, []);
  return <div>Product</div>;
}

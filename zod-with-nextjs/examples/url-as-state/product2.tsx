"use client";

import { useSearchParams } from "next/navigation";
import { z } from "zod";

const searchParamsSchema = z.object({
  id: z.coerce.number(), // coerce를 통해 타입 강제
  color: z.enum(["red", "green", "blue"]),
});

export default function Product2() {
  const searchParams = useSearchParams();
  const searchParamsObject = Object.fromEntries(searchParams);

  const validatedSearchParams =
    searchParamsSchema.safeParse(searchParamsObject);

  if (!validatedSearchParams.success) {
    return;
  }

  console.log(validatedSearchParams.data.id);

  return <div>Product2</div>;
}

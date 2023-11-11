import { promises as fs } from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { z } from "zod";

const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
});

export async function GET(request: NextRequest) {
  const jsonDirectory = path.join(process.cwd(), "../../lib/data.json");

  const fileContents = await fs.readFile(jsonDirectory + "/data.json", "utf8");

  const parsedProduct = productSchema.safeParse(fileContents);

  if (!parsedProduct.success) {
    return NextResponse.json(parsedProduct.error, {
      status: 422,
    });
  }

  return NextResponse.json(parsedProduct);
}

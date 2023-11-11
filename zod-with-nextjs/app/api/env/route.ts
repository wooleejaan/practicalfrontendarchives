import { parsedEnv } from "@/env";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const product = {
    name: "Cool jeans",
    price: 100,
  };

  console.log(parsedEnv.DATABASE_URL, parsedEnv.THIRD_PARTY_API_KEY);

  return NextResponse.json(product);
}

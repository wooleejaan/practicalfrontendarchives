import { checkoutFormSchema } from "@/lib/validations";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  const body: unknown = await request.json();

  const parsedForm = checkoutFormSchema.safeParse(body);

  if (!parsedForm.success) {
    return NextResponse.json(parsedForm.error, {
      status: 422,
    });
  }

  // ...
}

import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = contactSchema.parse(body);

    // This is where you would integrate with an email provider like SendGrid, Postmark, etc.
    // For now, we simulate success and log the action.
    console.log("Contact form submission received:", validatedData);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json(
      { message: "Enquiry received successfully. Our team will contact you shortly." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { message: "There was an error processing your enquiry. Please try again or email hello@websoul.com.au directly." },
      { status: 400 }
    );
  }
}

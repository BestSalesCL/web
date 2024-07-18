import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-04-10",
});

export async function POST(req: NextRequest) {
  const { firstName, lastName, emailAddress } = await req.json();

  try {
    // Use the Stripe SDK to create a customer
    const customer = await stripe.customers.create({
      email: emailAddress,
      name: `${firstName} ${lastName}`,
    });

    return NextResponse.json({
      message: "Customer created successfully",
      customer,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Customer creation failed" },
      { status: 500 }
    );
  }
}

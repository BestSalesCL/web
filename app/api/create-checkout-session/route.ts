import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-04-10",
});

export async function POST(req: NextRequest) {
  try {
    const { customerId, priceId, cancelUrl, productPrice } = await req.json();

    if (!customerId || !priceId || !cancelUrl || !productPrice) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create a Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      allow_promotion_codes: true,
      customer: customerId,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `https://thebestlevel.com/thank-you?session_id={CHECKOUT_SESSION_ID}&price_id=${productPrice}`,
      cancel_url: cancelUrl,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Checkout Session creation failed" },
      { status: 500 }
    );
  }
}

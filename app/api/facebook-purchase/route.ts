import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

function hashValue(value: string): string {
  return crypto.createHash("sha256").update(value).digest("hex");
}

export async function POST(req: NextRequest) {
  try {
    const {
      productId,
      purchaseId,
      customer,
      amount,
      currency,
      eventSourceUrl,
      clientUserAgent,
      fbc,
      fbp,
    } = await req.json();

    if (!productId || !purchaseId || !customer || isNaN(amount) || !currency) {
      console.error("Missing required fields", {
        productId,
        purchaseId,
        customer,
        amount,
        currency,
      });
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
    const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;
    const eventId: string = crypto.randomUUID();

    // Hash the customer data
    const hashedEmail = hashValue(customer.email);
    const hashedName = hashValue(customer.name);
    const hashedLastName = hashValue(customer.lastname);

    // Extract client IP address from headers
    const clientIpAddress =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip");

    const eventData = {
      event_name: "Purchase",
      event_time: Math.floor(Date.now() / 1000),
      action_source: "website",
      event_id: eventId,
      event_source_url: eventSourceUrl,
      user_data: {
        fn: hashedName,
        ln: hashedLastName,
        em: hashedEmail,
        client_ip_address: clientIpAddress,
        client_user_agent: clientUserAgent,
        fbc: fbc || "",
        fbp: fbp || "",
      },
      custom_data: {
        content_ids: [productId],
        content_type: "product",
        value: amount,
        currency,
      },
    };

    const externalResponse = await fetch(
      `https://graph.facebook.com/v20.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [eventData],
        }),
      }
    );

    if (!externalResponse.ok) {
      const errorData = await externalResponse.json();
      console.error("Error response from Facebook:", errorData);
      return NextResponse.json(
        { error: "Error sending purchase event to Facebook" },
        { status: 500 }
      );
    }

    const responseData = await externalResponse.json();
    return NextResponse.json(responseData, { status: 200 });
  } catch (error) {
    console.error("Error sending purchase event to Facebook:", error);
    return NextResponse.json(
      { error: "Error sending purchase event" },
      { status: 500 }
    );
  }
}

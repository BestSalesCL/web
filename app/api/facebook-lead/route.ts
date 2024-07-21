import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const { leadId, customer, eventSourceUrl, clientUserAgent, fbc, fbp } =
      await req.json();

    const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
    const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;
    const eventId: string = crypto.randomUUID();
    const eventTime = Math.floor(Date.now() / 1000);

    if (!pixelId || !accessToken) {
      throw new Error("Facebook Pixel ID or Access Token is missing");
    }

    const clientIpAddress =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip");

    const data = {
      event_name: "Lead",
      event_time: eventTime,
      action_source: "website",
      event_id: eventId,
      event_source_url: eventSourceUrl,
      user_data: {
        email: customer.email ? [crypto.createHash("sha256").update(customer.email).digest("hex")] : [],
        phone: customer.phoneNumber ? [crypto.createHash("sha256").update(customer.phoneNumber).digest("hex")] : [],
        client_ip_address: clientIpAddress,
        client_user_agent: clientUserAgent,
        fbc: fbc || "",
        fbp: fbp || "",
        fn: customer.firstName ? [crypto.createHash("sha256").update(customer.firstName).digest("hex")] : [],
        ln: customer.lastName ? [crypto.createHash("sha256").update(customer.lastName).digest("hex")] : [],
      },
    };

    const response = await fetch(
      `https://graph.facebook.com/v20.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: [data] }),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      console.error("Error response from Facebook:", responseData);
      return NextResponse.json(
        { error: "Error sending lead event to Facebook" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, responseData }, { status: 200 });
  } catch (error) {
    console.error("Error sending lead event to Facebook:", error);
    return NextResponse.json(
      { error: "Error sending lead event to Facebook" },
      { status: 500 }
    );
  }
}

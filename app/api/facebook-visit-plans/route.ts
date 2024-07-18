import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const { eventName, eventTime, clientUserAgent, eventSourceUrl, fbc, fbp } =
      await req.json();

    const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
    const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;
    const eventId: string = crypto.randomUUID();

    if (!pixelId || !accessToken) {
      throw new Error("Facebook Pixel ID or Access Token is missing");
    }

    // Extract client IP address from headers
    const clientIpAddress =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip");

    const data = {
      event_name: eventName,
      event_time: eventTime,
      action_source: "website",
      event_id: eventId,
      event_source_url: eventSourceUrl,
      user_data: {
        client_ip_address: clientIpAddress,
        client_user_agent: clientUserAgent,
        fbc: fbc || "",
        fbp: fbp || "",
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

    // Log response from Facebook
    const responseData = await response.json();
    console.log("Response from Facebook:", responseData);

    if (!response.ok) {
      console.error("Error response from Facebook:", responseData);
      return NextResponse.json(
        { error: "Error sending event to Facebook" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending event to Facebook:", error);
    return NextResponse.json(
      { error: "Error sending event to Facebook" },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phoneNumber, aboutYou, eventSourceUrl, clientUserAgent, fbc, fbp } =
      await req.json();

    const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
    const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;
    const eventId: string = crypto.randomUUID();
    const eventTime = Math.floor(new Date().getTime() / 1000);

    if (!pixelId || !accessToken) {
      throw new Error("Facebook Pixel ID or Access Token is missing");
    }

    // Extract client IP address from headers
    const clientIpAddress =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip");

    const data = {
      event_name: "CompleteRegistration",
      event_time: eventTime,
      action_source: "website",
      event_id: eventId,
      event_source_url: eventSourceUrl,
      user_data: {
        client_ip_address: clientIpAddress,
        client_user_agent: clientUserAgent,
        fbc: fbc || "",
        fbp: fbp || "",
        em: email ? crypto.createHash('sha256').update(email).digest('hex') : "",
        ph: phoneNumber ? crypto.createHash('sha256').update(phoneNumber).digest('hex') : "",
        fn: name ? crypto.createHash('sha256').update(name.split(' ')[0]).digest('hex') : "",
        ln: name ? crypto.createHash('sha256').update(name.split(' ')[1] || "").digest('hex') : "",
      },
      custom_data: {
        aboutYou,
      }
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
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();

    // Send the data to your external API
    const externalResponse = await fetch(
      process.env.SEND_EMAIL_API_ENDPOINT as string,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const emailResponseData = await externalResponse.json();

    // Data to send to Facebook
    const { firstName, lastName, emailAddress, phoneNumber } = formData;
    const eventName = "CompleteRegistration";
    const eventTime = Math.floor(Date.now() / 1000);
    const clientUserAgent = req.headers.get("user-agent") || "";
    const fbc = req.cookies.get("_fbc")?.value || "";
    const fbp = req.cookies.get("_fbp")?.value || "";
    const eventId: string = crypto.randomUUID();
    const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
    const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;

    if (!pixelId || !accessToken) {
      throw new Error("Facebook Pixel ID or Access Token is missing");
    }

    const clientIpAddress =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip");

    const fbEventData = {
      action_source: "website",
      event_id: eventId,
      event_name: eventName,
      event_time: eventTime,
      user_data: {
        em: [emailAddress],
        ph: [phoneNumber],
        client_ip_address: clientIpAddress,
        client_user_agent: clientUserAgent,
        fbc: fbc,
        fbp: fbp,
        fn: firstName,
        ln: lastName,
      },
    };

    const fbResponse = await fetch(
      `https://graph.facebook.com/v20.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([fbEventData]), // Send as an array
      }
    );

    const fbResponseText = await fbResponse.text();
    let fbResponseData;

    try {
      fbResponseData = JSON.parse(fbResponseText);
    } catch (jsonError) {
      console.error("Failed to parse Facebook response as JSON:", jsonError);
      return NextResponse.json(
        { error: "Error parsing Facebook response", details: fbResponseText },
        { status: 500 }
      );
    }

    if (!fbResponse.ok) {
      console.error("Error response from Facebook:", fbResponseData);
      return NextResponse.json(
        { error: "Error sending event to Facebook", details: fbResponseData },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, emailResponseData, fbResponseData }, { status: 200 });
  } catch (error) {
    const errorMessage = (error instanceof Error) ? error.message : "Unknown error";
    console.error("Error sending message or event to Facebook:", errorMessage);

    const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID; // Define pixelId here
    const accessToken = process.env.FACEBOOK_ACCESS_TOKEN; // Define accessToken here

    if (!pixelId || !accessToken) {
      return NextResponse.json(
        { error: "Facebook Pixel ID or Access Token is missing" },
        { status: 500 }
      );
    }

    let details = "An unknown error occurred";
    try {
      const response = await fetch(
        `https://graph.facebook.com/v20.0/${pixelId}/events?access_token=${accessToken}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([{
            action_source: "website",
            event_id: crypto.randomUUID(),
            event_name: "Error",
            event_time: Math.floor(Date.now() / 1000),
            user_data: {}
          }]),
        }
      );
      details = await response.text();
    } catch (fetchError) {
      console.error("Error fetching Facebook response:", fetchError);
    }

    return NextResponse.json(
      { error: "Error sending message or event to Facebook", details: details },
      { status: 500 }
    );
  }
}

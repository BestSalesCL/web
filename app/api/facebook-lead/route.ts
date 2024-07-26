import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();

    // Send data to your external API
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

    // Prepare Facebook event data
    const { firstName, lastName, emailAddress, phoneNumber, aboutYou } = formData;
    const eventName = "Lead";
    const eventTime = Math.floor(Date.now() / 1000);
    const clientUserAgent = req.headers.get("user-agent") || "";
    const eventSourceUrl = req.headers.get("referer") || "";
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
      event_name: eventName,
      event_time: eventTime,
      action_source: "website",
      event_id: eventId,
      event_source_url: eventSourceUrl,
      user_data: {
        em: [crypto.createHash('sha256').update(emailAddress).digest('hex')],
        ph: [crypto.createHash('sha256').update(phoneNumber).digest('hex')],
        client_ip_address: clientIpAddress,
        client_user_agent: clientUserAgent,
        fbc: fbc,
        fbp: fbp,
        fn: crypto.createHash('sha256').update(firstName).digest('hex'),
        ln: crypto.createHash('sha256').update(lastName).digest('hex'),
      },
      custom_data: {
        aboutYou: aboutYou,
      },
    };

    // Send data to Facebook API
    const fbResponse = await fetch(
      `https://graph.facebook.com/v20.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: [fbEventData] }),
      }
    );

    const fbResponseData = await fbResponse.json();

    if (!fbResponse.ok) {
      console.error("Error response from Facebook:", fbResponseData);
      return NextResponse.json(
        { error: "Error sending event to Facebook" },
        { status: 500 }
      );
    }

    // Log success message
    console.log("Bien hecho: Data sent successfully to both external API and Facebook.");

    // Successful response
    return NextResponse.json({ success: true, emailResponseData, fbResponseData }, { status: 200 });
  } catch (error) {
    console.error("Error sending message or event to Facebook:", error);
    return NextResponse.json(
      { error: "Error sending message or event to Facebook" },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
  try {
    

    const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
    const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;
    

    if (!pixelId || !accessToken) {
      throw new Error("Facebook Pixel ID or Access Token is missing");
    }

    // Extract client IP address from headers
    const clientIpAddress =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip");

    const data = [{"action_source":"website","event_id":12345,"event_name":"TestEvent","event_time":1721991368,"user_data":{"client_ip_address":"254.254.254.254","client_user_agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:63.0) Gecko/20100101 Firefox/63.0","em":"f660ab912ec121d1b1e928a0bb4bc61b15f5ad44d5efdc4e1c92a25e99b8e44a"}}];

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

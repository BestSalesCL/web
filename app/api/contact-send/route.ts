import { NextRequest, NextResponse } from "next/server";
// a
export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();

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

    const data = await externalResponse.json();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error sending message", error);
    return NextResponse.json(
      { error: "Error sending message" },
      { status: 500 }
    );
  }
}

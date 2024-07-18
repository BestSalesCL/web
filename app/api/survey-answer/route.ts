import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();

    const externalResponse = await fetch(
      process.env.EXTERNAL_API_ENDPOINT as string,
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
    console.error("Error forwarding data to external API:", error);
    return NextResponse.json(
      { error: "Error forwarding data to external API" },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import { list } from "@vercel/blob";

export async function GET(request: NextRequest) {
  const fileName1 = "intro-kVXNsFug0OGb40llKnMk2QZEU9jc61";
  const fileName2 = "app-video-7vO0ziNVbCwaOoUFRz99tUPHOA5YqO-Gd8gt6qtqteI7bTB8B5sqIqVws57oa.mp4"; 

  if (!fileName1 || !fileName2) {
    return NextResponse.json({ error: "Invalid file names" }, { status: 400 });
  }

  try {
    const [blobs1, blobs2] = await Promise.all([
      list({
        prefix: fileName1,
        limit: 1,
        token: process.env.BLOB_READ_WRITE_TOKEN,
      }),
      list({
        prefix: fileName2,
        limit: 1,
        token: process.env.BLOB_READ_WRITE_TOKEN,
      }),
    ]);

    const url1 = blobs1.blobs.length > 0 ? blobs1.blobs[0].url : null;
    const url2 = blobs2.blobs.length > 0 ? blobs2.blobs[0].url : null;

    return NextResponse.json({ url1, url2 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch video URLs" },
      { status: 500 }
    );
  }
}

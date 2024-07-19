import { NextRequest, NextResponse } from "next/server";
import { list } from "@vercel/blob";

export async function GET(request: NextRequest) {
  const fileNames = [
    "intro-kVXNsFug0OGb40llKnMk2QZEU9jc61.mp4",
    "app-video-7vO0ziNVbCwaOoUFRz99tUPHOA5YqO-Gd8gt6qtqteI7bTB8B5sqIqVws57oa.mp4",
    "video3.mp4",  // Cambia esto por el nombre real del archivo
    "video4.mp4",  // Cambia esto por el nombre real del archivo
    "video5.mp4"   // Cambia esto por el nombre real del archivo
  ];

  if (fileNames.some(fileName => !fileName)) {
    return NextResponse.json({ error: "Invalid file names" }, { status: 400 });
  }

  try {
    const blobs = await Promise.all(
      fileNames.map(fileName =>
        list({
          prefix: fileName,
          limit: 1,
          token: process.env.BLOB_READ_WRITE_TOKEN,
        })
      )
    );

    const urls = blobs.map(blob => (blob.blobs.length > 0 ? blob.blobs[0].url : null));

    return NextResponse.json({ urls });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch video URLs" },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import { list } from "@vercel/blob";

export async function GET(request: NextRequest) {
  const fileNames = [
    "intro-kVXNsFug0OGb40llKnMk2QZEU9jc61.mp4",
    "ad1-cZaWyXFhv5WPBAJCL4cxH2kj5ejBrz.mp4",
    "ad2-9FXlvHd8sIFoIko3FcXtXYFzVtmBFP.mp4",
    "ad3-ohHIb4DSImxt4iRVCdLaoKuETKXZSD.mp4"
  ];

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

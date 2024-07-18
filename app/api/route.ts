import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let response = { message: "Invalid Request" };
  const data = await request.formData();
  const modality = data.get("modality");
  const sport = data.get("sport");
  const position = data.get("position");

  if (!modality || !sport || !position) {
    response = { message: "Please input the required data" };
  } else {
    response = { message: "Submitted Successfully" };
  }

  return NextResponse.json(response);
}

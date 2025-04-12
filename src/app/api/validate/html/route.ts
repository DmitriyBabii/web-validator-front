import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const errors = await axios.post(
    `${process.env.API_URL}/validate/html`,
    body,
    {
      timeout: 30000,
    }
  );
  return NextResponse.json(errors.data.messageReports);
}

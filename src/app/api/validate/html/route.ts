import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const errors = await axios.post("http:/localhost:8080/validate/html", body);
  return NextResponse.json(errors.data.messageReports);
}

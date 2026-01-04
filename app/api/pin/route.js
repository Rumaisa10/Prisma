import { NextResponse } from "next/server";
import prisma from "../../../lib/db";

export async function GET() {
  try {
    const pins = await prisma.pin.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(pins, { status: 200 });
  } catch (error) {
    console.error("POST PIN ERROR", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

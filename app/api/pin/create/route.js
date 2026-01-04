import { NextResponse } from "next/server";
import prisma from "../../../../lib/db";

export async function POST(req) {
  try {
    const { title, description, type, content } = await req.json();

    if (!title) {
      return new NextResponse("Title is Mandatory", { status: 400 });
    }

    if (!type) {
      return new NextResponse("Type required", { status: 400 });
    }

    if (!content) {
      return new NextResponse("Content required", { status: 400 });
    }

    const pin = await prisma.pin.create({
      data: {
        title,
        description,
        type,
        content,
      },
    });
    return NextResponse.json(pin, { status: 201 });
  } catch (error) {
    console.error("POST PIN ERROR", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

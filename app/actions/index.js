"use server";

import { revalidatePath } from "next/cache";
import prisma from "../../lib/db";

export async function createPin(formData) {
  const title = formData.get("title");
  const description = formData.get("description");
  const type = formData.get("type");
  const content = formData.get("content");

  try {
    const pin = prisma.pin.create({
      date: {
        title,
        description,
        type,
        content,
      },
    });
    revalidatePath("/");
  } catch (err) {
    throw new Error(err);
  }
}

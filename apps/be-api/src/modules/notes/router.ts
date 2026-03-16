import { Hono } from "hono";
import { prismaDb } from "../../utils/prisma";
import { zValidator } from "@hono/zod-validator";
import { CreateNotesSchema } from "./schema";

export const noteRouter = new Hono()
  .get("/", async (c) => {
    const notes = await prismaDb.note.findMany;

    return c.json(notes);
  })
  .post("/", zValidator("json", CreateNotesSchema), async (c) => {
    const payload = c.req.valid("json");
    const newNote = await prismaDb.note.create({
      data: { content: payload.content },
    });

    return c.json(newNote);
  });

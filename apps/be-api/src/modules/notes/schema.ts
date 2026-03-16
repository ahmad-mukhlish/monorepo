import z from "zod";

export const CreateNotesSchema = z.object({
  content: z.string().min(1, "content must be filled"),
});

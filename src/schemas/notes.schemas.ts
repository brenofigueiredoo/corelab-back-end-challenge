import { z } from "zod";
import { userSchema } from "./users.schemas";

enum ColorOptions {
  LIGTH_BLUE = "LIGTH_BLUE",
  AQUAMARINE = "AQUAMARINE",
  LIGTH_YELLOW = "LIGTH_YELLOW",
  LIGTH_PINK = "LIGTH_PINK",
  LIGTH_RED = "LIGTH_RED",
  BLUE = "BLUE",
  PURPLE = "PURPLE",
  GREEN = "GREEN",
  LIGTH_SALMON = "LIGTH_SALMON",
  SILVER = "SILVER",
  GRAY = "GRAY",
  OLIVE = "OLIVE",
}
const noteSchema = z.object({
  title: z.string().min(3).max(45),
  is_favorite: z.boolean(),
});

const noteWithColorSchema = z.object({
  title: z.string().min(3).max(45),
  color: z.nativeEnum(ColorOptions),
  is_favorite: z.boolean(),
});

const userReturnSchema = userSchema
  .extend({
    id: z.string(),
  })
  .omit({ password: true });

const noteReturnSchema = noteSchema.extend({
  id: z.string(),
  color: z.string().nullable(),
  user: userReturnSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
});

const returnMultipleNoteSchema = noteReturnSchema.array();

const noteUpdateSchema = noteWithColorSchema.partial();

export {
  noteSchema,
  noteReturnSchema,
  returnMultipleNoteSchema,
  noteUpdateSchema,
  noteWithColorSchema,
};

import { DeepPartial, Repository } from "typeorm";
import { z } from "zod";
import {
  noteReturnSchema,
  noteSchema,
  noteWithColorSchema,
  returnMultipleNoteSchema,
} from "../schemas/notes.schemas";
import { Note } from "../entities/note.entity";

type TNote = z.infer<typeof noteSchema>;
type TNoteReturn = z.infer<typeof noteReturnSchema>;
type TNoteUpdate = DeepPartial<Note>;
type TNoteRepo = Repository<Note>;
type TAllNotesReturn = z.infer<typeof returnMultipleNoteSchema>;
type TNote3Part = z.infer<typeof noteWithColorSchema>;

export {
  TNote,
  TNoteReturn,
  TNoteUpdate,
  TNoteRepo,
  TAllNotesReturn,
  TNote3Part,
};

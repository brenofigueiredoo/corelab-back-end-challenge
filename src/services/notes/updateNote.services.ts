import { Repository } from "typeorm";
import { TNote3Part, TNoteReturn } from "../../interfaces/notes.interface";
import { Note } from "../../entities/note.entity";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import { noteReturnSchema } from "../../schemas/notes.schemas";

const updateNoteService = async (noteData: TNote3Part, noteId: string) => {
  const noteRepository: Repository<Note> = AppDataSource.getRepository(Note);

  const note: Note = await noteRepository.findOneBy({ id: noteId });

  if (!note) {
    throw new AppError("Note not found", 404);
  }

  const { title, color, is_favorite } = noteData;

  await noteRepository.update(noteId, {
    title: title ? title : note.title,
    color: color ? color : note.color,
    is_favorite: is_favorite !== undefined ? is_favorite : note.is_favorite,
  });

  const updatedNote: Note = await noteRepository.findOne({
    where: { id: noteId },
    relations: { user: true },
  });

  const newUpdatedUser: TNoteReturn = noteReturnSchema.parse(updatedNote);

  return newUpdatedUser;
};

export default updateNoteService;

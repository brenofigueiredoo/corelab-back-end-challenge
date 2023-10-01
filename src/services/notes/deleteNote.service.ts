/* eslint-disable @typescript-eslint/no-explicit-any */
import { Repository } from "typeorm";
import { Note } from "../../entities/note.entity";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";

const deleteNoteService = async (noteId: string): Promise<void> => {
  const noteRepository: Repository<Note> = AppDataSource.getRepository(Note);

  const note: any = await noteRepository.findOneBy({ id: noteId });

  if (!note) {
    throw new AppError("Note not found", 400);
  }

  await noteRepository.remove(note);
};

export default deleteNoteService;

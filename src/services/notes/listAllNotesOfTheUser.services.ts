import { Repository } from "typeorm";
import { Note } from "../../entities/note.entity";
import AppDataSource from "../../data-source";
import { TAllNotesReturn } from "../../interfaces/notes.interface";
import { returnMultipleNoteSchema } from "../../schemas/notes.schemas";

const listAllNotesOfTheUserService = async (userId: string) => {
  const noteRepository: Repository<Note> = AppDataSource.getRepository(Note);

  const notes = await noteRepository.find({
    where: {
      user: {
        id: userId,
      },
    },
    relations: { user: true },
  });

  const listNotes: TAllNotesReturn = returnMultipleNoteSchema.parse(notes);

  return listNotes;
};

export default listAllNotesOfTheUserService;

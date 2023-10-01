import { Repository } from "typeorm";
import { Note } from "../../entities/note.entity";
import AppDataSource from "../../data-source";
import { TNote, TNoteReturn } from "../../interfaces/notes.interface";
import { noteReturnSchema } from "../../schemas/notes.schemas";
import { User } from "../../entities/user.entity";

const createNoteService = async (noteData: TNote, userId: string) => {
  const noteRepository: Repository<Note> = AppDataSource.getRepository(Note);
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: userId });

  const { is_favorite, title } = noteData;

  const note = noteRepository.create({
    is_favorite,
    title,
    user,
  });

  await noteRepository.save(note);

  const newNote: TNoteReturn = noteReturnSchema.parse(note);

  return newNote;
};

export default createNoteService;

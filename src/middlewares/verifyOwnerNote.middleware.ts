import { Response, Request, NextFunction } from "express";
import { Repository } from "typeorm";
import { Note } from "../entities/note.entity";
import { User } from "../entities/user.entity";
import AppDataSource from "../data-source";

const verifyOwnerNoteMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const noteRepository: Repository<Note> = AppDataSource.getRepository(Note);
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const noteId: string = req.params.id;
  const userId: string = req.user.userId;

  const user: User = await userRepository.findOneBy({ id: userId });

  const note: Note = await noteRepository.findOne({
    where: { id: noteId, user: { id: user.id } },
  });

  if (!note) {
    return res.status(401).json({
      message: "Owner required",
    });
  }

  return next();
};

export default verifyOwnerNoteMiddleware;

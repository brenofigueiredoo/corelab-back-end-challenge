import { Request, Response } from "express";
import createNoteService from "../../services/notes/createNote.services";
import {
  TAllNotesReturn,
  TNote,
  TNoteReturn,
} from "../../interfaces/notes.interface";
import updateNoteService from "../../services/notes/updateNote.services";
import listAllNotesOfTheUserService from "../../services/notes/listAllNotesOfTheUser.services";
import deleteNoteService from "../../services/notes/deleteNote.service";

const createNoteController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const note: TNote = req.body;
  const userId: string = req.user.userId;
  const createdNote = await createNoteService(note, userId);
  return res.status(201).json(createdNote);
};

const listAllNotesOfTheUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: string = req.user.userId;
  const notes: TAllNotesReturn = await listAllNotesOfTheUserService(userId);
  return res.status(200).json(notes);
};

const updateNoteController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const noteData: TNote = req.body;
  const noteId: string = req.params.id;
  const note: TNoteReturn = await updateNoteService(noteData, noteId);
  return res.status(200).json(note);
};

const deleteNoteController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const noteId: string = req.params.id;
  await deleteNoteService(noteId);
  return res.status(204).json();
};

export {
  createNoteController,
  listAllNotesOfTheUserController,
  updateNoteController,
  deleteNoteController,
};

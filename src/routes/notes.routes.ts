import { Router } from "express";
import {
  createNoteController,
  deleteNoteController,
  listAllNotesOfTheUserController,
  updateNoteController,
} from "../controllers/notes/notes.controllers";
import { noteSchema } from "../schemas/notes.schemas";
import verifyDataIsValidMiddleware from "../middlewares/verifyDataIsValidMiddleware";
import verifyTokenIsValidMiddleware from "../middlewares/verifyToken.middleware";
import verifyOwnerNoteMiddleware from "../middlewares/verifyOwnerNote.middleware";

const notesRoutes: Router = Router();

notesRoutes.post(
  "",
  verifyTokenIsValidMiddleware,
  verifyDataIsValidMiddleware(noteSchema),
  createNoteController
);
notesRoutes.get(
  "",
  verifyTokenIsValidMiddleware,
  listAllNotesOfTheUserController
);
notesRoutes.patch(
  "/:id",
  verifyTokenIsValidMiddleware,
  verifyOwnerNoteMiddleware,
  updateNoteController
);
notesRoutes.delete(
  "/:id",
  verifyTokenIsValidMiddleware,
  verifyOwnerNoteMiddleware,
  deleteNoteController
);

export default notesRoutes;

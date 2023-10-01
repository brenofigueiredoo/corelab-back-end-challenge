import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listAllUsersController,
  retrieveUserController,
  updateUserController,
} from "../controllers/users/users.controllers";
import { userSchema, userUpdateSchema } from "../schemas/users.schemas";
import verifyDataIsValidMiddleware from "../middlewares/verifyDataIsValidMiddleware";
import verifyTokenIsValidMiddleware from "../middlewares/verifyToken.middleware";
import verifyOwnerUserMiddleware from "../middlewares/verifyOwnerUser.middleware";

const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  verifyDataIsValidMiddleware(userSchema),
  createUserController
);
usersRoutes.get("", verifyTokenIsValidMiddleware, listAllUsersController);
usersRoutes.get(
  "/:id",
  verifyTokenIsValidMiddleware,
  verifyOwnerUserMiddleware,
  retrieveUserController
);
usersRoutes.patch(
  "/:id",
  verifyTokenIsValidMiddleware,
  verifyOwnerUserMiddleware,
  verifyDataIsValidMiddleware(userUpdateSchema),
  updateUserController
);
usersRoutes.delete(
  "/:id",
  verifyTokenIsValidMiddleware,
  verifyOwnerUserMiddleware,
  deleteUserController
);

export default usersRoutes;

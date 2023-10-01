import { Request, Response } from "express";
import createUserService from "../../services/users/createUser.services";
import {
  TAllUsersReturn,
  TUser,
  TUserReturn,
} from "../../interfaces/user.interface";
import listAllUsersService from "../../services/users/listAllUsers.services";
import updateUserService from "../../services/users/updateUser.services";
import deleteUserService from "../../services/users/deleteUser.services";
import retrieveUserService from "../../services/users/retrieveUser.service";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user: TUser = req.body;
  const createdUser = await createUserService(user);
  return res.status(201).json(createdUser);
};

const listAllUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const allUsers: TAllUsersReturn = await listAllUsersService();
  return res.status(200).json(allUsers);
};

const retrieveUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: string = req.params.id;
  const user: TUserReturn = await retrieveUserService(userId);
  return res.status(200).json(user);
};

const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user: TUserReturn = await updateUserService(req.body, req.params.id);
  return res.status(200).json(user);
};

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: string = req.params.id;
  await deleteUserService(userId);
  return res.status(204).json();
};

export {
  createUserController,
  listAllUsersController,
  updateUserController,
  deleteUserController,
  retrieveUserController,
};

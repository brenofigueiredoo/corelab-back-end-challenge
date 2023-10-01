import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { TAllUsersReturn } from "../../interfaces/user.interface";
import { returnMultipleUserSchema } from "../../schemas/users.schemas";
import { User } from "../../entities/user.entity";

const listAllUsersService = async (): Promise<TAllUsersReturn> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const findAllUsers: Array<User> = await userRepo.find({});

  const allUsers: TAllUsersReturn =
    returnMultipleUserSchema.parse(findAllUsers);

  return allUsers;
};

export default listAllUsersService;

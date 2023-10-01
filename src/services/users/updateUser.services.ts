import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { TUser, TUserReturn } from "../../interfaces/user.interface";
import { userReturnSchema } from "../../schemas/users.schemas";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const updateUserService = async (
  userData: TUser,
  userId: string
): Promise<TUserReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const oldUser: User | null = await userRepository.findOneBy({
    id: userId,
  });

  if (!oldUser) {
    throw new AppError("User not found", 404);
  }

  const mergeUserData: TUser = { ...oldUser, ...userData };

  const updatedUser: TUser = userRepository.create(mergeUserData);

  await userRepository.save(updatedUser);

  const newUpdatedUser: TUserReturn = userReturnSchema.parse(updatedUser);

  return newUpdatedUser;
};

export default updateUserService;

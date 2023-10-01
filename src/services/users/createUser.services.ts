import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { TUser, TUserReturn } from "../../interfaces/user.interface";
import { userReturnSchema } from "../../schemas/users.schemas";

const createUserService = async (userData: TUser) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const emailAlreadyExists = await userRepository.findOneBy({
    email: userData.email,
  });

  if (emailAlreadyExists) {
    throw new AppError("Email already exists", 400);
  }

  const user: TUser = userRepository.create(userData);

  await userRepository.save(user);

  const newUser: TUserReturn = userReturnSchema.parse(user);

  return newUser;
};

export default createUserService;

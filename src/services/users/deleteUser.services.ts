import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { TUser } from "../../interfaces/user.interface";

const deleteUserService = async (idUser: string): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: TUser = await userRepository.findOneBy({ id: idUser });

  if (!user) {
    throw new AppError("User not found", 400);
  }

  await userRepository.delete(user);
};

export default deleteUserService;

import { Repository } from "typeorm";
import { AppError } from "../../errors/AppError";
import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";
import { TUserReturn } from "../../interfaces/user.interface";
import { userReturnSchema } from "../../schemas/users.schemas";

const retrieveUserService = async (idUser: string): Promise<TUserReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User = await userRepository.findOne({
    where: {
      id: idUser,
    },
  });

  if (!user) {
    throw new AppError("User not found", 400);
  }

  const userReturn: TUserReturn = userReturnSchema.parse(user);
  
  return userReturn;
};
  
export default retrieveUserService;
import { compare } from "bcryptjs";
import { AppError } from "../../errors/AppError";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { Repository } from "typeorm";
import TUserLogin from "../../interfaces/login.interface";
import jwt from "jsonwebtoken";

const createUserLoginService = async (loginData: TUserLogin): Promise<string> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);
  
    const user: User | null = await userRepository.findOneBy({
      email: loginData.email,
    });
  
    if (!user) {
      throw new AppError("Invalid credentials", 401);
    }
  
    const passwordMatch = await compare(loginData.password, user.password);
  
    if (!passwordMatch) {
      throw new AppError("Invalid credentials", 401);
    }
  
    const token: string = jwt.sign(
      {
        email: user.email,
      },
      process.env.SECRET_KEY as string,
      {
        expiresIn: "24h",
        subject: user.id,
      }
      );
  
    return token;
};
  
export default createUserLoginService;
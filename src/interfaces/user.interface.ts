import { DeepPartial, Repository } from "typeorm";
import { z } from "zod";
import {
  returnMultipleUserSchema,
  userReturnSchema,
  userSchema,
} from "../schemas/users.schemas";
import { User } from "../entities/user.entity";

type TUser = z.infer<typeof userSchema>;
type TUserReturn = z.infer<typeof userReturnSchema>;
type TUserUpdate = DeepPartial<User>;
type TUserRepo = Repository<User>;
type TAllUsersReturn = z.infer<typeof returnMultipleUserSchema>;

export { TUser, TUserUpdate, TUserRepo, TUserReturn, TAllUsersReturn };

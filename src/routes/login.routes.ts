import { Router } from "express";
import verifyDataIsValidMiddleware from "../middlewares/verifyDataIsValidMiddleware";
import userLoginSchema from "../schemas/login.schemas";
import { userLoginController } from "../controllers/login/login.controller";



const loginRoutes: Router = Router();

loginRoutes.post(
  "",
  verifyDataIsValidMiddleware(userLoginSchema),
  userLoginController
);

export default loginRoutes;
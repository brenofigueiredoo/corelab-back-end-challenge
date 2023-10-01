import express from "express";
import "express-async-errors";
import "reflect-metadata";
import handleErrorMiddleware from "./middlewares/handleError.middleware";
import usersRoutes from "./routes/users.routes";
import loginRoutes from "./routes/login.routes";
import notesRoutes from "./routes/notes.routes";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", usersRoutes);
app.use("/login", loginRoutes);
app.use("/notes", notesRoutes);

app.use(handleErrorMiddleware);

export default app;

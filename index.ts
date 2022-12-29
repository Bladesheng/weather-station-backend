import express, { Request, Response } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const app = express();

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req: Request, res: Response) => {
  res.sendStatus(404);
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`[server] Server is running at http://localhost:${port}`);
});

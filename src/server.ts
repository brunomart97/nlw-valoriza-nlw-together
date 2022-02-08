import express from "express";
import "reflect-metadata";
import { router } from "./routes";

import "./database";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));

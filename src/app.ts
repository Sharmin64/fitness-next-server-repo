import cors from "cors";

import { Application, Request, Response } from "express";
import express from "express";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// Basic route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

export default app;

// ?8-3 no module porjonto kaj kore raklam 8-4 te kaj kora baki
// ?8-3 er half part kaj baki ache

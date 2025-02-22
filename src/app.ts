import cors from "cors";

import { Application, Request, Response } from "express";
import express from "express";
import router from "./app/routers";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// Use routes
app.use("/api", router);

// Basic route
app.get("/", (req: Request, res: Response) => {
  res.send("Fitness Shop is coming soon!");
});

export default app;

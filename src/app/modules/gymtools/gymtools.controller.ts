/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { GymToolService } from "./gymtools.service";

export const createToolIntoDB = async (req: Request, res: Response) => {
  try {
    const tool = await GymToolService.createTool(req.body);
    res.status(201).json(tool);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

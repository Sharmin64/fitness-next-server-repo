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

export const getAllGymToolsFromDB = async (req: Request, res: Response) => {
  try {
    const gymTools = await GymToolService.getAllGymTools();
    res.status(200).json({ success: true, data: gymTools });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as Error).message || "Something went wrong",
    });
  }
};

export const getGymToolByIdFromDB = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const gymTool = await GymToolService.getGymToolById(id);
    if (!gymTool) {
      return res
        .status(404)
        .json({ success: false, message: "Gym tool not found" });
    }
    res.status(200).json({ success: true, data: gymTool });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};

export const updateGymToolInDB = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const gymTool = await GymToolService.updateGymTool(id, req.body);
    if (!gymTool) {
      return res
        .status(404)
        .json({ success: false, message: "Gym tool not found" });
    }
    res.status(200).json({ success: true, data: gymTool });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};
export const deleteGymToolFromDB = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const gymTool = await GymToolService.deleteGymTool(id);
    if (!gymTool) {
      return res
        .status(404)
        .json({ success: false, message: "Gym tool not found" });
    }
    res.status(200).json({ success: true, data: gymTool });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};

import { IGymTools } from "./gymtools.interface";
import { GymToolsModel } from "./gymtools.model";

const createTool = async (toolData: IGymTools): Promise<IGymTools> => {
  const tool = await new GymToolsModel(toolData);
  return tool;
};

const getAllGymTools = async (): Promise<IGymTools[]> => {
  return GymToolsModel.find();
};

const getGymToolById = async (id: string): Promise<IGymTools | null> => {
  return await GymToolsModel.findById(id);
};

const updateGymTool = async (
  id: string,
  data: Partial<IGymTools>
): Promise<IGymTools | null> => {
  return await GymToolsModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

const deleteGymTool = async (id: string): Promise<IGymTools | null> => {
  return await GymToolsModel.findByIdAndDelete(id);
};

export const GymToolService = {
  createTool,
  getAllGymTools,
  getGymToolById,
  updateGymTool,
  deleteGymTool,
};

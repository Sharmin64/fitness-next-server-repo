import { IGymTools } from "./gymtools.interface";
import { GymToolsModel } from "./gymtools.model";

const createTool = async (toolData: IGymTools): Promise<IGymTools> => {
  const tool = await new GymToolsModel(toolData);
  return tool;
};

export const GymToolService = {
  createTool,
};

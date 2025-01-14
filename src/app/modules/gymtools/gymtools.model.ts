import { model, Schema } from "mongoose";
import { IGymTools } from "./gymtools.interface";

const GymToolsSchema = new Schema<IGymTools>({
  image: { type: String, required: true },
  trainerName: { type: String, required: true },
  toolName: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  benefits: { type: [String], required: true },
});

export const GymToolsModel = model("GymTools", GymToolsSchema);

import { Document } from "mongoose";

export interface IGymTools extends Document {
  image: string;
  trainerName: string;
  toolName: string;
  description: string;
  price: number;
  benefits: string[];
}

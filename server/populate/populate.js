import dotenv from "dotenv";
import mongoose from "mongoose";
import Question from "../db/question.model.js";


dotenv.config();

const mongoUrl = process.env.MONGO_URL;

if (!mongoUrl) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1); // exit the current program
}





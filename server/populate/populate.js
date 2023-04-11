import dotenv from "dotenv";
import mongoose from "mongoose";
import Question from "../db/question.model.js";
import questions from "./questions.json" assert { type: "json" };

dotenv.config();

const mongoUrl = process.env.MONGO_URL;

if (!mongoUrl) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1); // exit the current program
}

const populateQuestions = async () => {
  await Question.deleteMany({});
  const Questions = questions.map((question) => {
    return {
      question: question.question,
      field: question.field,
      answer: "",
      difficulty: "",
      checked: false,
    };
  });
  await Question.create(...Questions);
  console.log("questions created");
};

const main = async () => {
  await mongoose.connect(mongoUrl);
  await populateQuestions();
  await mongoose.disconnect();
};

main().catch((error) => {
  console.error(error);
});

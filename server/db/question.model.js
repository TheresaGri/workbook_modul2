import mongoose from "mongoose";
const  { Schema } = mongoose;

const QuestionSchema = new Schema({
  question: String,
  answer: String,
  difficulty: String,
  field: String,
  checked: Boolean
});

const Question = mongoose.model("Question", QuestionSchema);

export default Question;
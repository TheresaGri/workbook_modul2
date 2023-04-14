/* import dotenv from "dotenv";
 */import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import questionRouter from "./routes/questions.js";

/* dotenv.config();
 */

const MONGO_URL="mongodb+srv://theresagri:theresaGriPassword@cluster0.jycu5sj.mongodb.net/Workbook"

const PORT = 4000;

console.log(MONGO_URL);

if (!MONGO_URL) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1);
}

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/questions", questionRouter);

const main = async () => {
  await mongoose.connect(MONGO_URL);
  app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
  });
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

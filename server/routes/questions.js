import express from "express";
const questionRouter = express.Router();
import QuestionModel from "../db/question.model.js";

questionRouter.get("/", async (req, res) => {
  try {
    let query = {};
    if (req.query["field"] !== undefined) {
      query = {
        ...query,
        field: { $regex: req.query["field"], $options: "i" },
      };
    }
    //have to check this with boolean value
    if (req.query["checked"] !== undefined) {
      query = { ...query, checked: req.query["checked"] };
    }

    if (req.query["difficulty"] !== undefined) {
      query={...query, difficulty: req.query["difficulty"]}
    }

    const questions = await QuestionModel.find(query);
    return res.json(questions);
  } catch (error) {
    console.error(error);
  }
});

questionRouter.get("/:id", async (req, res) => {
  try {
    const question = await QuestionModel.findById(req.params.id);
    return res.json(question);
  } catch (error) {
    console.error(error);
  }
});

questionRouter.patch("/:id",async (req,res) => {
  try{
    const question = await QuestionModel.findOneAndUpdate(
      {_id: req.params.id },
      {$set: {...req.body}},
      {new: true}
    );
    console.log(question);
    res.json(question);

  } catch(error) {
    console.error(error);
  }
} );

export default questionRouter;

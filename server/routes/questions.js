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
    if (req.query["checked"] !== undefined) {
      const checkedValue = req.query["checked"];
      if (checkedValue === "true") {
        query = { ...query, checked: true };
      } else if (checkedValue === "false") {
        query = { ...query, checked: false };
      } else {
        delete query.checked;
      }
    }

    if (req.query["difficulty"] !== undefined) {
      if (req.query["difficulty"] === "") {
        query = { ...query };
      } else {
        query = { ...query, difficulty: req.query["difficulty"] };
      }
    }

    if (req.query["field"] !== undefined) {
      query = {
        ...query,
        field: { $regex: req.query["field"], $options: "i" },
      };
    }

    if (req.query["question"] !== undefined) {
      query = {
        ...query,
        question: { $regex: req.query["question"], $options: "i" },
      };
    }

    if (req.query["answer"] !== undefined) {
      query = {
        ...query,
        answer: { $regex: req.query["answer"], $options: "i" },
      };
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

questionRouter.patch("/:id", async (req, res) => {
  try {
    const question = await QuestionModel.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } },
      { new: true }
    );
    console.log(question);
    res.json(question);
  } catch (error) {
    console.error(error);
  }
});

questionRouter.patch("/", async (req, res) => {
  try {
    console.log(req.body);
    const questions = await QuestionModel.updateMany(
      {},
      { $set: { ...req.body } },
      { new: true }
    );
    res.json(questions);
  } catch (error) {
    console.error(error);
  }
});

export default questionRouter;

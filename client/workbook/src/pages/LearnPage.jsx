import { useEffect, useState } from "react";
import fetchQuestions from "../api/fetchQuestions";
import Button from "../components/Button/Button";

const LearnPage = () => {
  const [questions, setQuestions] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const loadQuestions = async () => {
      const data = await fetchQuestions("");
      setQuestions(data);
    };
    loadQuestions();
  }, []);

  const changeQuestion = () => {
    setShowAnswer(false);
    setCurrentQuestionIndex(Math.floor(Math.random() * questions.length));
  };

  return (
    <div>
      <div>
        Question:
        {questions[currentQuestionIndex]?.question}{" "}
      </div>
      {showAnswer && (
        <div>Answer: {questions[currentQuestionIndex]?.answer}</div>
      )}
      <Button onClick={() => setShowAnswer(true)}>Show Answer</Button>
      <Button onClick={() => changeQuestion()}>Next Question</Button>
    </div>
  );
};

export default LearnPage;

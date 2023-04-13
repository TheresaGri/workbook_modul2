import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import fetchQuestions from "../api/fetchQuestions";
import Button from "../components/Button/Button";

const LearnPage = () => {
  const { state } = useLocation(); // access state prop from location object
  const { difficulty, category } = state.objectOfValues; // get difficulty and category from state
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [questionShown, setQuestionShown] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const loadQuestions = async (difficulty, category) => {
      const data = await fetchQuestions(difficulty, "", "", category, false);
      setQuestions(data);
      setQuestionShown(data[0]);
    };
    loadQuestions(difficulty, category);
  }, [difficulty, category]);

  const updateQuestion = async (question) => {
    await fetch(`http://localhost:4000/api/questions/${question._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(question),
    });

    const loadQuestions = async () => {
      const data = await fetchQuestions(difficulty, "", "", category, false);
      setQuestions(data);
      setQuestionShown(data[0]);
    };
    loadQuestions();
  };
  const changeQuestion = async () => {
    await updateQuestion(questionShown);
    const data = await fetchQuestions(difficulty, "", "", category, false);
    setQuestions(data);
    setShowAnswer(false);
  };

  useEffect(() => {
    if (questions.length > 0) {
      const nextQuestionIndex = Math.floor(Math.random() * questions.length);
      setQuestionShown(questions[nextQuestionIndex]);
    }
  }, [questions]);

  const onChangeChecked = (event) => {
    setQuestionShown({ ...questionShown, checked: event.target.checked });
  };

  return (
    <div className="learnPage">
      {questions.length !== 0 ? (
        <div className="questionContainer">
          {questionShown && (
            <div>
              <strong> Question: </strong>
              {questionShown?.question}{" "}
            </div>
          )}
          {showAnswer && questionShown && (
            <div className="answerContainer">
              <div className="answer">
                {" "}
                <strong>Answer: </strong> {questionShown?.answer}
              </div>
              <div className="dontShowAgainLabel">
                {" "}
                <strong>Don´t show again </strong>
                <input
                  type="checkbox"
                  checked={questionShown.checked}
                  onChange={onChangeChecked}
                />
              </div>
            </div>
          )}
          <div className="Button_container">
            <Button onClick={() => setShowAnswer(true)}>Show Answer</Button>
            <Button onClick={() => changeQuestion()}>Next Question</Button>
            <Button onClick={() => navigate("/learn/startpage")}>Cancel</Button>
          </div>
        </div>
      ) : (
        <div className="noQuestionsContainer">
          <p>no Questions left</p>
          <Button onClick={() => navigate("/learn/startpage")}>Go back</Button>
        </div>
      )}
    </div>
  );
};

export default LearnPage;

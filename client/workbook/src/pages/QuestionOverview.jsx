import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchQuestions from "../api/fetchQuestions";
import QuestionsList from "../components/QuestionsList";

const QuestionOverview = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const loadQuestions = async () => {
      const data = await fetchQuestions();
      setQuestions(data);
    };
    loadQuestions();
  }, []);

  const goToUpdatePage = (id) => {
    navigate(`/overview/update/${id}`);
  };

  return (
    <div>
      <h1>Overview</h1>
      <QuestionsList
        questions={questions}
        onUpdate={goToUpdatePage}
      ></QuestionsList>
    </div>
  );
};

export default QuestionOverview;

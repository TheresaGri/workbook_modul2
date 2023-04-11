import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchQuestions from "../api/fetchQuestions";
import QuestionsList from "../components/QuestionsList";
import SelectField from "../components/SelectField";

const QuestionOverview = () => {
  const options = ["easy", "medium", "difficult"];
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [sortByDifficulty, setSortByDifficulty] = useState("");

  useEffect(() => {
    const loadQuestions = async (sortByDifficulty) => {
      const data = await fetchQuestions(sortByDifficulty);
      setQuestions(data);
    };
    loadQuestions(sortByDifficulty);
  }, [sortByDifficulty]);

  const goToUpdatePage = (id) => {
    navigate(`/overview/update/${id}`);
  };

  const onDifficultyChange = (event) => {
    setSortByDifficulty(event.target.value);
  };

  return (
    <div className="overviewPage">
      <h1>Overview</h1>
      <div className="difficulyFilter">
       <strong> Sort By Difficulty </strong>
        <SelectField
          options={options}
          value={sortByDifficulty}
          onChange={onDifficultyChange}
        ></SelectField>
      </div>
      <div className="categoryFilter">

      </div>
      <QuestionsList
        questions={questions}
        onUpdate={goToUpdatePage}
      ></QuestionsList>
    </div>
  );
};

export default QuestionOverview;

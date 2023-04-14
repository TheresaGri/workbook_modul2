import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchQuestions from "../api/fetchQuestions";
import QuestionsList from "../components/QuestionsList";
import SelectField from "../components/SelectField";
import Button from "../components/Button/Button";

const QuestionOverview = () => {
  const options = ["easy", "medium", "hard"];
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [sortByDifficulty, setSortByDifficulty] = useState("");
  const [questionFilter, setQuestionFilter] = useState("");
  const [answerFilter, setAnswerFilter] = useState("");
  const [categories, setCategories] = useState([]);
  const [sortByCategory, setSortByCategory] = useState("");

  useEffect(() => {
    const getCategories = async () => {
      const questions = await fetchQuestions("", "", "", "","");
      const filteredCategories = questions.map((question) => question.field);
      const categories = [...new Set(filteredCategories)];
      setCategories(categories);
    };

    getCategories();
  }, []);

  useEffect(() => {
    const loadQuestions = async (
      sortByDifficulty,
      questionFilter,
      answerFilter,
      sortByCategory
    ) => {
      const data = await fetchQuestions(
        sortByDifficulty,
        questionFilter,
        answerFilter,
        sortByCategory,
        ""
      );
      setQuestions(data);
    };
    loadQuestions(
      sortByDifficulty,
      questionFilter,
      answerFilter,
      sortByCategory,
    );
  }, [sortByDifficulty, questionFilter, answerFilter, sortByCategory]);

  const goToUpdatePage = (id) => {
    navigate(`/overview/update/${id}`);
  };

  const onDifficultyChange = (event) => {
    setSortByDifficulty(event.target.value);
  };

  const onCategoryChange = (event) => {
    setSortByCategory(event.target.value);
  };

  const changeChecked = async (id, event) => {
    const checked = event.target.checked;
    const updatedQuestions = questions.map((question) => {
      if (question._id === id) {
        return { ...question, checked };
      } else {
        return question;
      }
    });
    setQuestions(updatedQuestions);

    await fetch(`https://fine-common-lathe.glitch.me/api/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ checked }),
    });
  };

  const resetChecked = async () => {
    setQuestions(
      questions.map((question) => {
        if (question.checked === true) {
          return { ...question, checked: false };
        } else {
          return question;
        }
      })
    );

    await fetch(`https://fine-common-lathe.glitch.me/api/questions`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ checked: false }),
    });
  };

  return (
    <div className="overviewPage">
      <h1>Overview</h1>
      <div className="filterAndResetButton_container">
        <label>
          {" "}
          <strong> Sort By Difficulty </strong>
        </label>
        <div className="difficulyFilter">
          <SelectField
            options={options}
            value={sortByDifficulty}
            onChange={onDifficultyChange}
          ></SelectField>
        </div>
        <label>
          {" "}
          <strong> Sort By Category </strong>
        </label>
        <div className="categoryFilter">
          <SelectField
            options={categories}
            value={sortByCategory}
            onChange={onCategoryChange}
          ></SelectField>
        </div>
        <div className="searchQuestions">
          <input
            placeholder="filter questions"
            type="text"
            value={questionFilter}
            onChange={(event) => setQuestionFilter(event.target.value)}
          />
        </div>
        <div className="searchAnswers">
          <input
            placeholder="filter answers"
            type="text"
            value={answerFilter}
            onChange={(event) => setAnswerFilter(event.target.value)}
          />
        </div>
        <div className="checkedRest">
          <Button onClick={() => resetChecked()}>
            Set all questions checked to false
          </Button>
        </div>
      </div>
      <QuestionsList
        questions={questions}
        onUpdate={goToUpdatePage}
        onChange={changeChecked}
      ></QuestionsList>
    </div>
  );
};

export default QuestionOverview;

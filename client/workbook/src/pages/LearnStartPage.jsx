import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SelectField from "../components/SelectField";
import fetchQuestions from "../api/fetchQuestions";

const LearnStartPage = () => {
  const navigate = useNavigate();
  const difficulties = ["easy", "medium", "hard"];
  const [difficulty, setDifficulty] = useState("");
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [objectOfValues, setObjectOfValues] = useState({
    difficulty: "",
    category: "",
  });

  useEffect(() => {
    const getDifficulty = async () => {
      const questions = await fetchQuestions("", "", "", "", "");

      const filteredCategories = questions.map((question) => question.field);
      const categoriesArray = [...new Set(filteredCategories)];

      setCategories(categoriesArray);
    };

    getDifficulty();
  }, []);

  console.log(difficulties);

  const changeCategory = (event) => {
    setCategory(event.target.value);
    setObjectOfValues({ ...objectOfValues, category: event.target.value });
  };

  const changeDifficulty = (event) => {
    setDifficulty(event.target.value);
    setObjectOfValues({ ...objectOfValues, difficulty: event.target.value });
  };

  const startLearnIndexPage = () => {
    navigate("/learn/index-card", { state: { objectOfValues } }); // navigate to LearnPage with objectOfValues in state
  };

  return (
    <div className="learnPageForm">
      <div className="selectField">
        <SelectField
          options={difficulties}
          onChange={changeDifficulty}
          value={difficulty}
        ></SelectField>

        <SelectField
          options={categories}
          onChange={changeCategory}
          value={category}
        ></SelectField>
      </div>

      <Button onClick={() => startLearnIndexPage()} className="startButton">
        Start
      </Button>
    </div>
  );
};

export default LearnStartPage;

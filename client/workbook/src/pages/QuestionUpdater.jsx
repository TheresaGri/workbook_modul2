import { useParams } from "react-router-dom";
import UpdateForm from "../components/UpdateForm";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const QuestionUpdater = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [question, setQuestion] = useState({});
  const [answer, setAnswer] = useState("");

  const fetchQuestionById = async (id) => {
    const url = `http://localhost:4000/api/questions/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };
  useEffect(() => {
    const loadQuestion = async (id) => {
      const data = await fetchQuestionById(id);
      setQuestion(data);
      setAnswer(data.answer);
    };
    loadQuestion(id);
  }, [id]);


  const onAnswerChange = (event) => {
    setAnswer(event.target.value);
    setQuestion({ ...question, answer: event.target.value });
  };

   const updateQuestion = async (question) => {
    await fetch(`http://localhost:4000/api/questions/${question._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(question),
    });
  } 

  const onSubmit = async () => {
    console.log(question);
    await updateQuestion(question);
    navigate(`/overview`);
 
  }


  return (
    <div>
      <UpdateForm
        answer={answer}
        onChange={onAnswerChange}
        questionById = {question}
        onClick={onSubmit}
      ></UpdateForm>
    </div>
  );
};
export default QuestionUpdater;
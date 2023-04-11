import "./QuestionsList.css";
import Button from "../Button/Button";

const QuestionsList = ({ questions, onUpdate }) => {
  return (
    <div className="questions_container">
      {questions.map((question) => (
        <div className="question" key={question._id}>
          <div>
            <strong>Q: </strong> {question.question}
          </div>
          <div>
            <strong>A: </strong> {question.answer}
          </div>
          <div>
            {" "}
            <strong>Difficulty: </strong> {question.difficulty}
          </div>
          <div>
            <strong>Field: </strong> {question.field}
          </div>
          <Button onClick={() => onUpdate(question._id)}>Update</Button>
        </div>
      ))}
    </div>
  );
};

export default QuestionsList;

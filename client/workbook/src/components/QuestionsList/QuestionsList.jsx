import "./QuestionsList.css";
import Button from "../Button/Button";

const QuestionsList = ({ questions, onUpdate, onChange }) => {
  return (
    <div className="questions_container">
      {questions.map((question) => (
        <div className="question" key={question._id}>
          <div>
            <strong>Q: </strong> {question.question}
          </div>
          <div>
            <strong>A: </strong>{" "}
          </div>
          <textarea className= "textareaQuestionsList"readOnly={true} value={question.answer} />

          <div>
            {" "}
            <strong>Difficulty: </strong> {question.difficulty}
          </div>
          <div>
            <strong>Category: </strong> {question.field}
          </div>
          <div>
            <strong>Checked: </strong>{" "}
            <input type="checkbox" checked={question.checked} onChange={(event) => onChange(question._id,event)} />
          </div>
          <Button onClick={() => onUpdate(question._id)}>Update</Button>
        </div>
      ))}
    </div>
  );
};

export default QuestionsList;

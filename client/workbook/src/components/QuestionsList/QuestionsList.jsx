import "./QuestionsList.css";
import Button from "../Button/Button";

const QuestionsList = ({ questions, onUpdate, onChange }) => {
  return (
    <div className="questions_container">
      {questions.map((question) => (
        <div className="question" key={question._id}>
          <div>
            <strong><u>Q</u>: </strong> <strong> {question.question} </strong>
          </div>
          <div>
            <strong><u>A</u>: </strong>{" "}
          </div>
          <textarea className= "textareaQuestionsList"readOnly={true} value={question.answer} />

          <div>
            {" "}
            <strong><u>Difficulty</u></strong>: {question.difficulty}
          </div>
          <div>
            <strong><u>Category</u>: </strong> {question.field}
          </div>
          <div>
            <strong><u>Checked</u>: </strong>{" "}
            <input type="checkbox" checked={question.checked} onChange={(event) => onChange(question._id,event)} />
          </div>
          <Button onClick={() => onUpdate(question._id)}>Update</Button>
        </div>
      ))}
    </div>
  );
};

export default QuestionsList;

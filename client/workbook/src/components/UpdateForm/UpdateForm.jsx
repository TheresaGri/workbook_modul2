import Button from "../Button/Button";
import SelectField from "../SelectField";
import "./UpdateForm.css";

const UpdateForm = ({
  questionById,
  value,
  onChange,
  onClick,
  onCancel,
  onSelectDifficulty,
  valueOfDifficulty,
}) => {
  const arrOfDifficulties = ["easy", "medium", "hard"];

  return (
    <div className="updateForm">
      <div>
        Question:
        <div>{questionById.question}</div>
      </div>
      <label>Answer:</label>
      <textarea id="answer" value={value} onChange={onChange}></textarea>
      <SelectField
        options={arrOfDifficulties}
        onChange={onSelectDifficulty}
        value={valueOfDifficulty}
      ></SelectField>
      <Button onClick={onClick}>Submit</Button>
      <Button onClick={onCancel}>Cancel</Button>
    </div>
  );
};

export default UpdateForm;

import Button from "../Button/Button";
import "./UpdateForm.css";

const UpdateForm = ({value, onChange, onClick }) => {
  return (
    <div className="updateForm">
      <label>Answer:</label>
      <input type="text" id="answer" value={value} onChange={onChange} />
      <Button onClick={onClick}>Submit</Button>
    </div>
  );
};

export default UpdateForm;

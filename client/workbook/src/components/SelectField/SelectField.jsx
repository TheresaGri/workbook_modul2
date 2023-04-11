const SelectField = ({ options, onChange, value }) => {
  return (
    <div>
      <select onChange={onChange} value={value}>
        <option value="">no value </option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};
export default SelectField;

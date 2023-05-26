import React from "react";
import "../../App.css";
import "./Select.css";
function Select({ options, labelContent, id, name, onChange }) {
  function handleChange(event) {
    let value = event.target.value;
    onChange(name, value);
  }
  return (
    <div>
      <label htmlFor="sortBy">{labelContent}&nbsp;</label>
      <select id={id} className="select" name={name} onChange={handleChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.content}
          </option>
        ))}
      </select>
    </div>
  );
}
export default Select;

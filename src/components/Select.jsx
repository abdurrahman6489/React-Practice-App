import React from "react";
import "../App.css";
function Select(props) {
  const array = props.options;
  return (
    <select className="select">
      {array.map((option, index) => (
        <option key={index} value={option.value}>
          {option.content}
        </option>
      ))}
    </select>
  );
}
export default Select;

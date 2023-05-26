import React, { useState } from "react";
import "../../App.css";
import "./Button.css";
function Button({ stock, productId }) {
  const [currentQuantity, setCurrentQuantity] = useState({
    isClicked: false,
    count: 0,
  });
  let { isClicked, count } = currentQuantity;
  function handleClick(event) {
    let change = event.target.id === "increase" ? 1 : count > 0 && -1;
    setCurrentQuantity({ isClicked: !isClicked, count: count + change });
  }
  return (
    <div className="btnContainer">
      <button
        id="decrease"
        className="btn"
        onClick={(event) => {
          handleClick(event);
          stock(count > 0 ? -1 : 0, productId);
        }}
      >
        -
      </button>
      <p className="productQuantity">Items purchased : {count}</p>
      <button
        id="increase"
        className="btn"
        onClick={(event) => {
          handleClick(event);
          stock(1, productId);
        }}
      >
        +
      </button>
    </div>
  );
}
export default Button;

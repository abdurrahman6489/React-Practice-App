import React from "react";
import "../App.css";
function Card({
  id,
  title,
  description,
  price,
  rating,
  discountPercentage,
  images,
  stock,
  children,
}) {
  const image = images[0];
  return (
    <div id={id} className="cardContainer">
      <div className="imageContainer">
        <img src={image} className="image" />
      </div>
      <div className="descriptionContainer">
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
        <p className="rating">Rating : {rating}</p>
        <p className="price">Rs {price}/-</p>
        <p className="discount">Discount : {discountPercentage}%</p>
        <p className="stock">
          In Stock : <span className="stockQuant">{stock}</span>
        </p>
        {children}
      </div>
    </div>
  );
}
export default Card;

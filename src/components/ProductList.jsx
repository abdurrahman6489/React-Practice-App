import React, { useState, useEffect } from "react";
import "../App.css";
import Card from "./Card";
import Nav from "./Nav";
import Button from "./Button";
import Header from "./Header";
function ProductList() {
  const [productData, setProductData] = useState([]);
  const [sortBy, setSortBy] = useState("price");
  const [sortingOrder, setSortingOrder] = useState("ascending");
  const [totalExpense, setTotalExpense] = useState(0);

  async function makeApiCall() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProductData(data.products);
    // .then((response) => response.json())
    // .then((data) => setProductData(data.products));
  }
  useEffect(() => {
    makeApiCall();
  }, []);
  const options = [
    { value: "price", content: "Price" },
    { value: "discountPercentage", content: "Discount" },
    { value: "rating", content: "Rating" },
  ];
  const sortOrder = [
    { value: "ascending", content: "Low to High" },
    { value: "descending", content: "High to Low" },
  ];
  const sortedArray = productData.slice().sort((a, b) => {
    return sortingOrder === "ascending"
      ? a[sortBy] - b[sortBy]
      : b[sortBy] - a[sortBy];
  });
  function handleStock(productsAdded, productId) {
    console.log(productsAdded, productId);
    let index = sortedArray.findIndex((elem) => elem.id === productId);
    const newProductsArray = productData.map((product) => {
      let { stock, price } = product;
      if (product.id === productId) {
        setTotalExpense((prevExpense) => prevExpense + price * productsAdded);
        return { ...product, stock: stock - productsAdded };
      }
      return { ...product };
    });
    setProductData(newProductsArray);
  }
  return (
    <div>
      <Header />
      <Nav>
        <label htmlFor="sortBy">Sort By&nbsp;</label>
        <select
          id="sortBy"
          className="select"
          onChange={(event) => setSortBy(event.target.value)}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.content}
            </option>
          ))}
        </select>
        <label htmlFor="sortingOrder">&nbsp;In Order&nbsp;</label>
        <select
          id="sortingOrder"
          className="select"
          onChange={(event) => setSortingOrder(event.target.value)}
        >
          {sortOrder.map((option, index) => (
            <option key={index} value={option.value}>
              {option.content}
            </option>
          ))}
        </select>
        <div className="totalExpense">Total Expense : Rs {totalExpense}/-</div>
      </Nav>
      <main className="mainContainer" key="main">
        {sortedArray.length === 0 ||
          sortedArray.map((product) => (
            <Card {...product} key={product.id}>
              <Button stock={handleStock} productId={product.id} />
            </Card>
          ))}
      </main>
    </div>
  );
}
export default ProductList;

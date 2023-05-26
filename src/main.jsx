import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ProductList from "./components/ProductList.jsx"; //for rendering fetching Product List Mini Project
import CountryList from "./components/CountryList/CountryList.jsx"; //for rendering State Capital Mini Project
import Form from "./components/Form/Form.jsx"; //for rendering Form Validation Project
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//Write CountryList for rendering State Capital Mini Project
//Write Product List for rendering fetching Product List Mini Project

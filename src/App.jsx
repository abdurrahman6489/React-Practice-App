import React, { useState, useEffect } from "react";
import "./App.css";

const object = { firstName: "", secondName: "", email: "" };
const errorObject = { firstNameError: "", secondNameError: "", emailError: "" };

function App() {
  const [formDetails, setFormDetails] = useState(object);
  const [formErrors, setFormErrors] = useState(errorObject);
  function handleFormInputs(e) {
    let field = e.target.name;
    let value = e.target.value;
    setFormDetails((obj) => ({ ...obj, [field]: value }));
  }
  function submit() {
    const { firstName, secondName, email } = formDetails;
    let firstNameError =
      firstName.length < 3 && "First name must contain at least 3 characters";
    let secondNameError =
      secondName.length < 3 && "Second name must contain at least 3 characters";
    let emailError =
      email.length < 3 && "Email must contain at least 3 characters";
    setFormErrors((obj) => ({
      ...obj,
      firstNameError,
      secondNameError,
      emailError,
    }));
  }
  return (
    <main>
      <div className="formContainer">
        <label>First Name </label>
        <div>
          <input
            placeholder="John"
            onChange={handleFormInputs}
            value={formDetails.firstName}
            type="text"
            name="firstName"
          />
          {formErrors.firstNameError && <p>{formErrors.firstNameError}</p>}
        </div>
        <label>Second Name </label>
        <div>
          <input
            placeholder="Cena"
            onChange={handleFormInputs}
            value={formDetails.secondName}
            type="text"
            name="secondName"
          />
          {formErrors.secondNameError && <p>{formErrors.secondNameError}</p>}
        </div>
        <label>Email </label>
        <div>
          <input
            placeholder="youcantseeme@wwe.com"
            onChange={handleFormInputs}
            value={formDetails.email}
            type="email"
            name="email"
          />
          {formErrors.emailError && <p>{formErrors.emailError}</p>}
        </div>
      </div>
      <button className="btn" onClick={submit}>
        Submit
      </button>
    </main>
  );
}
export default App;

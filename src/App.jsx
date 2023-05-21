import React, { useState, useEffect } from "react";
import "./App.css";
import User from "./components/User";

const object = { employeeId: "", firstName: "", secondName: "", email: "" };
const errorObject = {
  employeeIdError: "",
  firstNameError: "",
  secondNameError: "",
  emailError: "",
};

function App() {
  const [formDetails, setFormDetails] = useState(object);
  const [formErrors, setFormErrors] = useState(errorObject);
  const [users, setUsers] = useState([]);
  function handleFormInputs(e) {
    let field = e.target.name;
    let value = e.target.value;
    setFormDetails((obj) => ({ ...obj, [field]: value }));
    let employeeIdError =
      field === "employeeId" &&
      value.length !== 4 &&
      "employeeId must be of 4 digits only";
    let firstNameError =
      field === "firstName" &&
      value.length < 3 &&
      "First name must contain at least 3 characters";
    let secondNameError =
      field === "secondName" &&
      value.length < 3 &&
      "Second name must contain at least 3 characters";
    let emailError =
      field === "email" &&
      value.length < 3 &&
      "Email must contain at least 3 characters";
    setFormErrors((obj) => ({
      ...obj,
      employeeIdError,
      firstNameError,
      secondNameError,
      emailError,
    }));
  }
  function submit() {
    const { employeeIdError, firstNameError, secondNameError, emailError } =
      formErrors;
    if (
      !employeeIdError &&
      !firstNameError &&
      !secondNameError &&
      !emailError
    ) {
      setUsers((oldUsers) => [...oldUsers, { ...formDetails }]);
      setFormDetails(object);
    }
  }
  return (
    <main>
      <div className="formContainer">
        <label>EmployeeId </label>
        <div>
          <input
            placeholder="1000"
            onChange={handleFormInputs}
            value={formDetails.employeeId}
            type="text"
            name="employeeId"
          />
          {formErrors.employeeIdError && <p>{formErrors.employeeIdError}</p>}
        </div>
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
      <div className="employeeContainer">
        {users.length > 0 &&
          users.map((user) => <User {...user} key={user.id} />)}
      </div>
    </main>
  );
}
export default App;

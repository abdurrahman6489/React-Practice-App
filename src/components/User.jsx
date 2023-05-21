import React from "react";
import "../App.css";
function User({ employeeId, firstName, secondName, email }) {
  return (
    <div className="employee" key={{ employeeId }}>
      <p key={employeeId}>employeeId : {employeeId}</p>
      <p key={firstName}>First Name : {firstName}</p>
      <p key={secondName}>Last Name : {secondName}</p>
      <p key={email}>Email : {email}</p>
    </div>
  );
}
export default User;

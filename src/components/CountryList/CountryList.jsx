import React, { useState } from "react";
import "../../App.css";
import "./CountryList.css";
import Nav from "../Nav/Nav";
function CountryList() {
  const countries = [
    {
      country: "India",
      capital: "New Delhi",
      details: [
        { State: "West Bengal", capital: "Kolkata" },
        { State: "Maharashtra", capital: "Mumbai" },
        { State: "Uttar Pradesh", capital: "Lucknow" },
        { State: "Rajasthan", capital: "Jaipur" },
      ],
    },
    {
      country: "US",
      capital: "Washington DC",
      details: [
        { State: "California", capital: "Sacramento" },
        { State: "Texas", capital: "Austin" },
        { State: "Florida", capital: "Tallahassee" },
        { State: "Alaska", capital: "Juneau" },
      ],
    },
    {
      country: "Australia",
      capital: "Canberra",
      details: [
        { State: "Queensland", capital: "Brisbane" },
        { State: "New South Wales", capital: "Sydney" },
        { State: "Victoria", capital: "Melbourne" },
        { State: "Western Australia", capital: "Perth" },
      ],
    },
    {
      country: "Germany",
      capital: "Berlin",
      details: [
        { State: "Bavaria", capital: "Munich" },
        { State: "North Rhine-Westphalia", capital: "Düsseldorf" },
        { State: "Baden-Württemberg", capital: "Stuttgart" },
        { State: "Rhineland-Palatinate", capital: "Mainz" },
      ],
    },
  ];
  function getDetails(detailName, array) {
    const options = array.map((elem) => ({
      value: elem[detailName],
      content: elem[detailName],
    }));
    return options;
  }

  const [currentCountry, setCurrentCountry] = useState(countries[0]);
  const [currentCapitalIndex, setCurrentCapitalIndex] = useState(0);
  function handleChange(event) {
    let id = event.target.id;
    console.log(id);
    switch (id) {
      case "country":
        let indexCountry = countries.findIndex(
          (country) => country["country"] === event.target.value
        );
        setCurrentCountry(countries[indexCountry]);
        console.log("country set");
        return;
      case "states":
        console.log(id);
        let indexCapital = event.target.options.selectedIndex;
        setCurrentCapitalIndex(indexCapital);
        return;
    }
  }
  return (
    <div>
      <Nav>
        <label htmlFor="country">Choose Country&nbsp;</label>
        <select onChange={handleChange} id="country" className="select">
          {getDetails("country", countries).map((option, index) => (
            <option value={option.value} key={index}>
              {option.content}
            </option>
          ))}
        </select>
        <label htmlFor="states">&nbsp;Choose State&nbsp;</label>
        <select onChange={handleChange} id="states" className="select">
          {getDetails("State", currentCountry["details"]).map(
            (option, index) => (
              <option value={option.value} key={index}>
                {option.content}
              </option>
            )
          )}
        </select>
        <div className="capital">
          &nbsp;current Capital is :{" "}
          {currentCountry["details"][currentCapitalIndex]["capital"]}
        </div>
      </Nav>
      <div className="mainContainer">
        <p>Selected Country</p>
        <h1>{currentCountry["country"]}</h1>
        <p>Capital</p>
        <h2>{currentCountry["capital"]}</h2>
        <table>
          <thead>
            <tr>
              <th>State</th>
              <th>Capital</th>
            </tr>
          </thead>
          <tbody>
            {currentCountry["details"].map((detail, index) => {
              return (
                <tr key={index}>
                  <td>{detail["State"]}</td>
                  <td>{detail["capital"]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default CountryList;

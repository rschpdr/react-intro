import React from "react";
import "./assets/styles/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import ListItem from "./ListItem";

function App() {
  const person = {
    name: "Pedro",
    city: "Indaiatuba",
    isMinor: false,
    favoriteFood: ["hamburger", "fries", "pizza"],
    favoriteColor: "purple",
  };

  function conditionalRender() {
    if (person.isMinor) {
      return <h3>Cannot drive yet</h3>;
    }
    return <h3>Free to drive around {person.city}</h3>;
  }

  function renderLoop() {
    // const jsxArr = [];

    // for (let i = 0; i < person.favoriteFood.length; i++) {
    //   jsxArr.push(<li>{person.favoriteFood[i]}</li>);
    // }

    // return jsxArr;

    return person.favoriteFood.map((food, index) => (
      <li key={index}>{food}</li>
    ));
  }

  return (
    <div
      className="flex-column"
      style={{ backgroundColor: person.favoriteColor }}
    >
      <label htmlFor="textInput">Name: </label>
      <input type="text" id="textInput" />
      <br></br>

      <strong>Name: {person.name}</strong>
      <br></br>
      <strong>City: {person.city}</strong>

      <label htmlFor="favoriteFoodDropdown">Choose your favorite food: </label>
      <select id="favoriteFoodDropdown">
        {person.favoriteFood.map((food, index) => (
          <option value={food} key={index}>
            {food}
          </option>
        ))}
      </select>
      {conditionalRender()}
      <ul>
        {person.favoriteFood.map((food, index) => (
          <ListItem key={index}>{food}</ListItem>
        ))}
        {/* {renderLoop()} */}
      </ul>
    </div>
  );
}

export default App;

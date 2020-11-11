import React from "react";
import ListItem from "./ListItem";

// Todo componente de classe (ou stateful) precisa ter o método render() para retornar JSX

class List extends React.Component {
  state = {
    fruits: ["Peach", "Blueberry", "Melon"],
    value: "",
  };

  // 1. Quando o usuário clicar no botão `Add`,
  handleClick = (event) => {
    // 2. adicione a string contida no atributo value para a array fruits dentro do state
    this.setState({ fruits: [...this.state.fruits, this.state.value] });
    console.log(this.state);
  };

  handleChange = (event) => {
    // console.log(event.currentTarget.value);
    this.setState({ value: event.currentTarget.value });
  };

  handleClearClick = (event) => {
    this.setState({ fruits: [] });
  };

  render() {
    console.log("rodou o render");
    return (
      <div>
        <ul>
          {this.state.fruits.map((fruit) => (
            <ListItem>{fruit}</ListItem>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Type a new fruit"
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Add</button>
        <button onClick={this.handleClearClick}>Clear</button>
      </div>
    );
  }
}

export default List;

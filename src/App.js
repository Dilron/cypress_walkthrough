import React, { Component } from "react";

import "./App.css";

import List from "./components/List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTodo: "",
      todos: [
        {
          title: "Teach Cypress Testing Suite"
        }
      ]
    };
  }

  handleChange = (prop, val) => {
    this.setState({ [prop]: val });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <input
          type="text"
          onChange={e => this.handleChange("currentTodo", e.target.value)}
          value={this.state.currentTodo}
          className="new_todo"
          autoFocus
          placeholder="Add new Todo"
        />
        <List todos={this.state.todos} />
      </div>
    );
  }
}

export default App;

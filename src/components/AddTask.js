import React, { Component } from "react";
import "./AddTask.css";

class AddTask extends Component {
  state = {
    text: "",
    checked: false,
    date: "2020-01-25",
  };

  render() {
    return (
      <div className="form">
        <input
          type="text"
          placeholder="dodaj zadanie"
          value={this.state.text}
        />

        <input id="important" type="checkbox" checked={this.state.checked} />
        <label htmlFor="important">Priorytet </label>
        <br />

        <label htmlFor="date">Do kiedy zrobić</label>
        <input
          id="date"
          type="date"
          value={this.state.date}
          min="2020-01-01"
          max="2022-12-31"
        />
        <br />
        <button>Dodaj</button>
      </div>
    );
  }
}

export default AddTask;

import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        text: "zagrać wreszcie w Wiedźmina 3",
        date: "2020-10-15",
        isImportant: true,
        isActive: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "posprzątać samochód",
        date: "2020-11-23",
        isImportant: false,
        isActive: true,
        finishDate: null,
      },
      {
        id: 3,
        text: "sprzedać butelki po piwie",
        date: "2020-09-28",
        isImportant: true,
        isActive: true,
        finishDate: null,
      },
      {
        id: 4,
        text: "schudnąć 30 kilogramów",
        date: "2021-03-08",
        isImportant: false,
        isActive: true,
        finishDate: null,
      },
      {
        id: 5,
        text: "pomalować dom po sylwestrze",
        date: "2021-05-06",
        isImportant: true,
        isActive: true,
        finishDate: null,
      },
      {
        id: 6,
        text: "nie odbierać poleconego od komornika",
        date: "2022-08-01",
        isImportant: true,
        isActive: true,
        finishDate: null,
      },
      {
        id: 7,
        text: "fryzjer!!!",
        date: "2020-10-05",
        isImportant: false,
        isActive: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    //by removing element
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex((task) => task.id === id); // index is -1 when element has not been found
    if (index >= 0) {
      tasks.splice(index, 1);
    } else {
      return;
    }

    this.setState({
      tasks,
    });

    // by using filter
    // let tasks = [...this.state.tasks];
    // tasks = tasks.filter(task => task.id !== id);

    // this.setState({
    //   tasks,
    // });
  };

  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.isActive = false;
        task.finishDate = new Date().getTime();
      }
    });

    this.setState({
      tasks,
    });
  };

  render() {
    return (
      <div className="App">
        TODO APP
        <AddTask />
        <TaskList
          tasks={this.state.tasks}
          deleteTaskHandler={this.deleteTask}
          changeStatusHandler={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;

import React, { Fragment } from "react";
import Task from "./Task";

const TaskList = (props) => {
  const { deleteTaskHandler, changeStatusHandler } = props;

  const active = props.tasks.filter((task) => task.isActive);
  const done = props.tasks.filter((task) => !task.isActive);

  if (done.length >= 2) {
    done.sort((a, b) => b.finishDate - a.finishDate);
  }

  if (active.length >= 2) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();

      if (a < b) return -1;
      else if (a > b) return 1;
      else return 0;
    });
  }

  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      deleteTaskHandler={deleteTaskHandler}
      changeStatusHandler={changeStatusHandler}
    />
  ));

  const doneTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      deleteTaskHandler={deleteTaskHandler}
      changeStatusHandler={changeStatusHandler}
    />
  ));

  return (
    <Fragment>
      <div className="active">
        <h1>Zadania do zrobienia</h1>
        {activeTasks.length > 0 ? (
          activeTasks
        ) : (
          <p>nie masz nic do roboty :)</p>
        )}
      </div>

      <hr />

      <div className="done">
        <h3>
          Zadania zrobione <em>({doneTasks.length})</em>
        </h3>
        {done.length > 5 && (
          <span style={{ fontSize: 10 }}>
            Wyświetlonych jest jedynie 5 ostatnich zadań
          </span>
        )}
        {doneTasks.slice(0, 5)}
      </div>
    </Fragment>
  );
};

export default TaskList;

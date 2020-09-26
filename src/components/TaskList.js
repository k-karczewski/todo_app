import React, { Fragment } from "react";
import Task from "./Task";

const TaskList = (props) => {
  const { deleteTaskHandler, changeStatusHandler } = props;

  const active = props.tasks.filter((task) => task.isActive);
  const done = props.tasks.filter((task) => !task.isActive);

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
          <span style={{fontSize: 10}}>Wyświetlonych jest jedynie 5 ostatnich zadań</span>
        )}
        {doneTasks.slice(0, 5)}
      </div>
    </Fragment>
  );
};

export default TaskList;

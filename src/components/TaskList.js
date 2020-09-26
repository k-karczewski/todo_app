import React, { Fragment } from "react";
import Task from "./Task";

const TaskList = (props) => {
  const { deleteTaskHandler, changeStatusHandler } = props;
  const tasks = props.tasks.map((task) => (
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
        {tasks}
      </div>

      <hr />

      <div className="done">
        <h3>Zadania zrobione (0)</h3>
      </div>
    </Fragment>
  );
};

export default TaskList;

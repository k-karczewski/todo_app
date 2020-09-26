import React from "react";

const Task = (props) => {
  const { text, date, id } = props.task;
  const { changeStatusHandler, deleteTaskHandler } = props;
  return (
    <div>
      <strong>{text}</strong> - do <span>{date} </span>
      <button onClick={() => changeStatusHandler(id)}>Zostało zrobione</button>
      <button onClick={() => deleteTaskHandler(id)}>X</button>
    </div>
  );
};

export default Task;

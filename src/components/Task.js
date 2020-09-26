import React from "react";

const Task = (props) => {
  const importantStyle = {
    color: "red",
  };

  const { changeStatusHandler, deleteTaskHandler } = props;
  const { text, date, id, isActive, isImportant, finishDate } = props.task;

  if (isActive) {
    return (
      <div>
        <strong style={isImportant ? importantStyle : null}>{text}</strong> - do{" "}
        <span>{date} </span>
        <button onClick={() => changeStatusHandler(id)}>
          Zostało zrobione
        </button>
        <button onClick={() => deleteTaskHandler(id)}>X</button>
      </div>
    );
  } else {
    const finishTime = new Date(finishDate).toLocaleString();
    return (
      <div>
        <strong>{text}</strong>
        <em> (zrobić do {date}) </em>
        <br />- potiwerdzenie wykonania <span>{finishTime}</span>
        <button onClick={() => deleteTaskHandler(id)}>X</button>
      </div>
    );
  }
};

export default Task;

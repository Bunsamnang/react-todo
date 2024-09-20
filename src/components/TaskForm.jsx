import React, { useState } from "react";
import "./TaskForm.css";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    taskName: "",
    status: "todo",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    //prevent default behavior of form
    e.preventDefault();

    // add taskData obj to tasks array in App component
    setTasks((prev) => {
      return [...prev, taskData];
    });

    // set everything back to default when submit
    // needs to also give the value as properties in
    // taskData obj
    setTaskData({
      taskName: "",
      status: "todo",
    });
  };

  return (
    <header className="app__header">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Enter your task"
          name="taskName"
          value={taskData.taskName}
          autoFocus
          onChange={handleChange}
        />
        <div className="app__header__bottom-line">
          <select
            name="status"
            value={taskData.status}
            id=""
            className="task-status"
            onChange={handleChange}
          >
            <option value="todo">To Do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
          <button className="add-task-btn" type="submit">
            Add task
          </button>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;

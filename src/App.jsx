import React, { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import "./App.css";

const oldTask = JSON.parse(localStorage.getItem("tasks"));

const App = () => {
  const [tasks, setTasks] = useState(oldTask || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => taskIndex !== index);

    setTasks(newTasks);
  };

  const handleEdit = (taskIndex, newTitle) => {
    const newTasks = tasks.map((task, index) =>
      taskIndex === index ? { ...task, taskName: newTitle } : task
    );

    setTasks(newTasks);
  };

  console.log(tasks);

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />

      <div className="main">
        <TaskColumn
          title="🎯 To do"
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
        <TaskColumn
          title="🌟 Doing"
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
        <TaskColumn
          title="✅ Done"
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
};

export default App;

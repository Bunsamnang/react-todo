import React from "react";
import "./TaskColumn.css";
import TaskCard from "../components/TaskCard";

const TaskColumn = ({ title, tasks, status, handleDelete, handleEdit }) => {
  return (
    <section className="task-column">
      <h1 className="task-column__heading">{title}</h1>

      {/* check to see if user input with which status and display them in
      the correct status */}

      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard
              key={index}
              title={task.taskName}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              index={index}
            />
          )
      )}
    </section>
  );
};

export default TaskColumn;

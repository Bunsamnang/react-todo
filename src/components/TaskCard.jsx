import React, { useState } from "react";
import deleteIcon from "../assets/trash3.svg";
import editIcon from "../assets/pencil.svg";
import "./TaskCard.css";

const TaskCard = ({ title, handleDelete, handleEdit, index }) => {
  const [isEditing, setisEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const toggleEdit = () => {
    //first click doesn't trigger the handleEdit, instead, it
    // display an input elem asking for input
    // when we the input is lost focus, it calls toggleEdit again
    // this time it triggers handleEdit which update data in parent component(App)
    if (isEditing) {
      handleEdit(index, newTitle);
    }

    setisEditing(!isEditing);
  };

  return (
    <div className="task-card">
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={handleTitleChange}
          onBlur={toggleEdit} // Save the task when input loses focus
          autoFocus
          className="input"
        />
      ) : (
        <p className="task-datail">{title}</p>
      )}
      <div className="icon-container">
        <img
          src={editIcon}
          alt="edit icon"
          className="edit-icon"
          onClick={toggleEdit}
        />
        <img
          src={deleteIcon}
          alt="delete icon"
          onClick={() => handleDelete(index)}
          className="delete-icon"
        />
      </div>
    </div>
  );
};

export default TaskCard;

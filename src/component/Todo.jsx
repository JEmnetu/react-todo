import React from "react";

const Todo = ({ todo, index }) => {
  return (
    <div className="todo">
      {todo.text}

      <div className="todo-btns">
        <button id="completeBtn">Complete</button>
        <button id="deleteBtn">Delete</button>
      </div>
    </div>
  );
};

export default Todo;

import React from "react";

const Todo = ({ todo, index, completeTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div className="todo-btns">
        <button id="completeBtn" onClick={() => completeTodo(index)}>
          Complete
        </button>
        <button id="deleteBtn">Delete</button>
      </div>
    </div>
  );
};

export default Todo;

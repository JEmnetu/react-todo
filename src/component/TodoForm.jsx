import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      return;
    }
    addTodo(value);
    setValue("");
  };
  return (
    <form id="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </form>
  );
};

export default TodoForm;

import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([{ text: "Todo", isCompleted: false }]);

  return (
    <div className="App">
      <h1 id="main-heading">Todo Application</h1>
      <div id="todo-list">
        {todos.map((todo, index) => (
          <p className="todo">{todo.text}</p>
        ))}
      </div>
    </div>
  );
}

export default App;

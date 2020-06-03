import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./component/Todo";
import TodoForm from "./component/TodoForm";

function App() {
  const [todos, setTodos] = useState([{ text: "Todo", isCompleted: false }]);

  useEffect(() => {
    let storedTodos = JSON.parse(localStorage.getItem("todos"));
    storedTodos ? setTodos(storedTodos) : console.log("No stored todos");
  }, []);

  const addTodo = (text) => {
    let newTodos = [...todos, { text: text, isCompleted: false }];
    setTodos(newTodos);
    console.log(text);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <div className="App">
      <h1 id="main-heading">Todo Application</h1>
      <div id="todo-list">
        {todos.map((todo, index) => (
          <Todo todo={todo} index={index} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;

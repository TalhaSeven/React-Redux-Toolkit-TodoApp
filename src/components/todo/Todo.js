import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./Todo.css";

const Todo = () => {
  return (
    <>
      <h2>Todo List With Redux Toolkit</h2>
      <TodoInput />
      <TodoList />
    </>
  );
};

export default Todo;

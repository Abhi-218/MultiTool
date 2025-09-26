import React, { useState } from "react";
import Todoform from "./Todoform";
import Todolist from "./Todolist";
import { TodoProvider } from "../../context/Todocontaxt";
import { Helmet } from "react-helmet";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? updatedTodo : todo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="w-full max-w-xl mx-auto  bg-white rounded-lg shadow-lg p-6">
      <Helmet>
        <title>Todo List - Multi Tool Three | Simple Task Manager</title>
        <meta
          name="description"
          content="Organize your tasks with Multi Tool Three's free Todo List tool. Add, manage, and track your daily activities easily online."
        />
        <meta
          name="keywords"
          content="todo list, task manager, checklist, productivity tool, multi tool three"
        />
      </Helmet>

      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        📝 Todo App
      </h1>

      <TodoProvider
        value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
      >
        <Todoform />
        <div className="mt-6 space-y-4">
          {todos.length === 0 ? (
            <p className="text-gray-500 text-center">No todos yet. Add one!</p>
          ) : (
            todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <Todolist todo={todo} />
              </div>
            ))
          )}
        </div>
      </TodoProvider>
    </div>
  );
};

export default Todo;

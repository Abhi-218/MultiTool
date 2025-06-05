import React, { useState } from 'react';
import { useTodo } from '../../context/Todocontaxt';

const Todoform = () => {
  const [todo, setTodo] = useState('');
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = todo.trim();
    if (!trimmed) return;

    addTodo({ todo: trimmed, completed: false });
    setTodo('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full gap-2 items-center justify-center"
    >
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="🖊️ Add a new task..."
        className="flex-grow bg-gray-200 text-gray-800 placeholder:text-gray-500 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-lg font-semibold transition"
      >
        Add
      </button>
    </form>
  );
};

export default Todoform;

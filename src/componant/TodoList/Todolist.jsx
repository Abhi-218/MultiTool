import React, { useState, useEffect, useRef } from "react";
import { useTodo } from "../../context/Todocontaxt";

const Todolist = ({ todo }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const textRef = useRef(null);
  const [isTruncated, setIsTruncated] = useState(false);

  // Check if text is truncated
  const checkTruncate = () => {
    const el = textRef.current;
    if (!el) return;
    setIsTruncated(el.scrollWidth > el.clientWidth);
  };

  useEffect(() => {
    checkTruncate();
    window.addEventListener("resize", checkTruncate);
    return () => window.removeEventListener("resize", checkTruncate);
  }, [todo.todo, isEditable]);

  const handleEdit = () => {
    if (todo.completed) return;
    if (isEditable) {
      updateTodo(todo.id, { ...todo, todo: todoMsg });
    }
    setIsEditable(!isEditable);
  };

  return (
    <div
      className={`group w-full flex items-center justify-between bg-white border rounded-md shadow-sm px-4 py-2 transition-all ${
        todo.completed ? "opacity-60 line-through" : ""
      }`}
    >
      {/* Complete checkbox */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
        className="w-5 h-5 accent-blue-600 cursor-pointer"
      />

      {/* Todo message (editable or read-only) */}
      {isEditable ? (
        <input
          type="text"
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          className="flex-grow mx-3 px-2 py-1 text-lg rounded-md outline-none border border-blue-400 bg-gray-100"
        />
      ) : (
        <div className="relative max-w-[300px] flex-grow mx-3">
          <p
            ref={textRef}
            className="text-lg truncate whitespace-nowrap overflow-hidden"
          >
            {todo.todo}
          </p>

          {/* Show tooltip only if truncated */}
          {isTruncated && (
            <div className="absolute hidden group-hover:block z-10 bg-black text-white text-sm px-2 py-1 rounded shadow-lg top-full left-0 w-max max-w-xs break-words whitespace-normal">
              {todo.todo}
            </div>
          )}
        </div>
      )}

      {/* Edit/Save button */}
      <button
        onClick={handleEdit}
        className="text-xl px-2 py-1 hover:scale-110 transition"
        title={isEditable ? "Save" : "Edit"}
      >
        {isEditable ? "💾" : "✏️"}
      </button>

      {/* Delete button */}
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-xl px-2 py-1 text-red-500 hover:scale-110 transition"
        title="Delete"
      >
        ❌
      </button>
    </div>
  );
};

export default Todolist;

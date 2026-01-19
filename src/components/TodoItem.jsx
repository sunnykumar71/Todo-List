import React, { useState } from "react";
import { toast } from "react-toastify";

const TodoItem = ({
  todo,
  onDeleteTodo,
  onToggleTodo,
  onEditTodo,
  theme, // "dark" | "light"
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim() === "") {
      toast.error("Todo cannot be empty");
      return;
    }

    onEditTodo(todo.id, editText);
    setIsEditing(false);
    toast.success("Todo updated");
  };

  return (
    <li
      className={`flex items-center justify-between px-4 py-3 mb-3 rounded-xl transition transform hover:-translate-y-0.5
        ${
          theme === "dark"
            ? "bg-gray-700/50 hover:bg-gray-700 shadow-lg"
            : "bg-white hover:bg-gray-100 shadow-md"
        }
      `}
    >
      {/* LEFT SIDE */}
      <div className="flex items-center gap-3 flex-1">
        {/* Checkbox */}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleTodo(todo.id)}
          className="w-4 h-4 accent-blue-500 cursor-pointer"
        />

        {/* Text / Input */}
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className={`flex-1 px-2 py-1 rounded border outline-none ${
              theme === "dark"
                ? "bg-gray-800 border-gray-600 text-white"
                : "bg-white border-gray-300 text-gray-800"
            }`}
          />
        ) : (
          <span
            className={`flex-1 ${
              todo.completed
                ? "line-through text-gray-400"
                : theme === "dark"
                ? "text-gray-200"
                : "text-gray-800"
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>

      {/* RIGHT ACTIONS */}
      <div className="flex gap-3 ml-3 text-sm">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="text-green-500 hover:text-green-600 font-medium cursor-pointer"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="text-gray-400 hover:text-gray-500 cursor-pointer"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-400 hover:text-blue-500 font-medium cursor-pointer"
            >
              Edit
            </button>
            <button
              onClick={() => onDeleteTodo(todo.id)}
              className="text-red-400 hover:text-red-500 font-medium cursor-pointer"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default TodoItem;

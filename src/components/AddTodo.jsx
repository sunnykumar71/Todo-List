import React, { useState } from "react";
import { toast } from "react-toastify";

const AddTodo = ({ onAddTodo }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") {
      toast.error("Todo cannot be empty!");
      return;
    }

    onAddTodo(text);
    toast.success("Todo added!");
    setText("");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-6 ">
      {/* Input */}
      <input
        type="text"
        placeholder="Enter todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="
          flex-1
          px-4 py-3
          border border-gray-300
          bg-white
          shadow-md
          focus:outline-none
          focus:ring-2 focus:ring-blue-400
          focus:shadow-lg
          transition
        "
      />

      {/* Button */}
      <button
        onClick={handleAdd}
        className="
          px-6 py-3
          bg-blue-600 text-white font-semibold
          shadow-lg
          transform transition
          hover:-translate-y-0.5 hover:shadow-xl
          active:translate-y-0 active:shadow-md
          cursor-pointer
        "
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;

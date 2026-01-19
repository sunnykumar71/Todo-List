import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  onDeleteTodo,
  onToggleTodo,
  onEditTodo,
}) => {
  return (
    <ul className="mt-4 max-h-110 overflow-y-auto  px-2">
      {todos.length === 0 ? (
        <p className="text-center text-orange-500">
          No todos yet! Add some above.
        </p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
            onEditTodo={onEditTodo}
          />
        ))
      )}
    </ul>
  );
};

export default TodoList;

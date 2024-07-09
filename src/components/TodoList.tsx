import React, { useState } from "react";
import TodoItem from "./TodoItem";
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

/**
 * Represents a Todo List component.
 */
const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "John Learn TypeScript", completed: false },
    { id: 2, title: "Richard Build a React App", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [error, setError] = useState<string>("");

  /**
   * Handles the addition of a new todo item.
   * 
   * @param event - The form event triggered by submitting the form.
   */
  const handleAddTodo = (event: React.FormEvent) => {
    event.preventDefault();
    if (newTodo.trim() === "") {
      setError("Please enter a todo");
      return;
    }

    const todo: Todo = {
      id: todos.length + 1,
      title: newTodo,
      completed: false,
    };
    setTodos([...todos, todo]);
    setNewTodo("");
    setError("");
  };

  return (
    <div className="TodoList">
      <h1>Todo List</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Enter new todo"
          value={newTodo}
          onChange={(e) => {
            setNewTodo(e.target.value);
            setError("");
          }}
        />
        <button type="submit">Add Todo</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

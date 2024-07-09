import React from "react";

interface TodoItemProps {
  id: number;
  title: string;
  completed: boolean;
}

/**
 * Represents a single todo item.
 *
 * @param {object} props - The props for the TodoItem component.
 * @param {string} props.id - The unique identifier of the todo item.
 * @param {string} props.title - The title of the todo item.
 * @param {boolean} props.completed - Indicates whether the todo item is completed or not.
 * @returns {JSX.Element} The rendered TodoItem component.
 */
const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed }) => {
  return (
    <div className="TodoItem">
      <h3>{title}</h3>
      <p>{completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
};
export default TodoItem;
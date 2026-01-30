import { useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import TodoFilters from "../components/TodoFilters";

const presetTodos = [
  "Go to the gym",
  "Finish homework",
  "Read 10 pages",
  "Clean room",
  "Drink more water"
];

export default function TodosPage() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addPresetTodo = (text) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text,
        completed: false
      }
    ]);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
  });

  return (
    <div className="todos-container">
      <div>
        <TodoForm todos={todos} setTodos={setTodos} />

        <div className="preset-section">
          <h3>Quick Add</h3>
          {presetTodos.map((item) => (
            <button
              key={item}
              className="preset-btn"
              onClick={() => addPresetTodo(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h2 className="section-title">Your Tasks</h2>

        {filteredTodos.length === 0 ? (
          <p className="empty-state">
            No tasks here yet. Add one or use a preset 🚀
          </p>
        ) : (
          <TodoList todos={filteredTodos} setTodos={setTodos} />
        )}

        <TodoFilters filter={filter} setFilter={setFilter} />
      </div>
    </div>
  );
}

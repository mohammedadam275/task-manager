export default function TodoItem({ todo, todos, setTodos }) {
  const toggleComplete = () => {
    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = () => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <span onClick={toggleComplete}>{todo.text}</span>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
}

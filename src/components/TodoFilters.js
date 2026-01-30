export default function TodoFilters({ filter, setFilter }) {
  const buttons = ["all", "completed", "incomplete"];

  return (
    <div className="filters">
      {buttons.map((type) => (
        <button
          key={type}
          className={filter === type ? "active-filter" : ""}
          onClick={() => setFilter(type)}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ))}
    </div>
  );
}

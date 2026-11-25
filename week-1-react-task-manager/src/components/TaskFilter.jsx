function TaskFilter({
  filter,
  onFilterChange,
  total,
  completed,
  onClearCompleted,
}) {
  const filters = ["all", "active", "completed"];

  return (
    <div className="filter-bar">
      <p>
        {total} tasks, {completed} completed
      </p>

      <div className="filter-buttons">
        {filters.map((name) => (
          <button
            key={name}
            className={filter === name ? "active-filter" : ""}
            onClick={() => onFilterChange(name)}
          >
            {name}
          </button>
        ))}
      </div>

      {completed > 0 && (
        <button className="clear-btn" onClick={onClearCompleted}>
          Clear completed
        </button>
      )}
    </div>
  );
}

export default TaskFilter;

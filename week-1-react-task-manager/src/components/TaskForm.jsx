import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (text.trim() === "") {
      setError("Task not null");
      return;
    }

    onAddTask(text.trim());
    setText("");
    setError("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Task</button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default TaskForm;

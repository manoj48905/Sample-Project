import { useState } from "react";

function AssignmentForm({ addAssignment }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) return;

    addAssignment(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Assignment Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button type="submit">
        Add Assignment
      </button>
    </form>
  );
}

export default AssignmentForm;
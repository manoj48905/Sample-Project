import React, { useState } from "react";
import "./App.css";

function App() {
  const [assignments, setAssignments] = useState([]);

  const addAssignment = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const subject = e.target.subject.value;
    const dueDate = e.target.dueDate.value;

    const newAssignment = {
      id: Date.now(),
      title,
      subject,
      dueDate,
      status: "Pending",
    };

    setAssignments([...assignments, newAssignment]);

    e.target.reset();
  };

  const markSubmitted = (id) => {
    setAssignments(
      assignments.map((a) =>
        a.id === id ? { ...a, status: "Submitted" } : a
      )
    );
  };

  const pending = assignments.filter(
    (a) => a.status === "Pending"
  );

  const submitted = assignments.filter(
    (a) => a.status === "Submitted"
  );

  return (
    <div className="container">

      <h1 className="title">
        🎓 Assignment Submission Tracker
      </h1>

      <div className="stats">

        <div className="card blue">
          <h2>{assignments.length}</h2>
          <p>Total Assignments</p>
        </div>

        <div className="card orange">
          <h2>{pending.length}</h2>
          <p>Pending</p>
        </div>

        <div className="card green">
          <h2>{submitted.length}</h2>
          <p>Submitted</p>
        </div>

      </div>

      <form onSubmit={addAssignment} className="form">

        <input
          type="text"
          name="title"
          placeholder="Assignment Title"
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
        />

        <input
          type="date"
          name="dueDate"
          required
        />

        <button>Add Assignment</button>

      </form>

      <div className="section">

        <h2>📌 Pending Assignments</h2>

        {pending.map((a) => (
          <div key={a.id} className="assignment">

            <div>
              <h3>{a.title}</h3>
              <p>{a.subject}</p>
              <small>{a.dueDate}</small>
            </div>

            <button
              onClick={() => markSubmitted(a.id)}
            >
              Submit
            </button>

          </div>
        ))}

      </div>

      <div className="section">

        <h2>✅ Submitted Assignments</h2>

        {submitted.map((a) => (
          <div key={a.id} className="assignment submitted">

            <div>
              <h3>{a.title}</h3>
              <p>{a.subject}</p>
              <small>{a.dueDate}</small>
            </div>

            <span>Completed</span>

          </div>
        ))}

      </div>

    </div>
  );
}

export default App;
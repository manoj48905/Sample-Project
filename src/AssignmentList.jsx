function AssignmentList({
  assignments,
  completeAssignment,
  deleteAssignment
}) {
  return (
    <div>
      {assignments.map(item => (
        <div className="assignment" key={item.id}>
          <h4>{item.title}</h4>

          <p>Status: {item.status}</p>

          <button
            onClick={() =>
              completeAssignment(item.id)
            }
          >
            Complete
          </button>

          <button
            onClick={() =>
              deleteAssignment(item.id)
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default AssignmentList;
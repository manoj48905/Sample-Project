function Dashboard({ assignments }) {
  const total = assignments.length;
  const completed = assignments.filter(
    item => item.status === "Completed"
  ).length;
  const pending = total - completed;

  return (
    <div className="dashboard">
      <div className="card">
        <h3>Total</h3>
        <p>{total}</p>
      </div>

      <div className="card">
        <h3>Completed</h3>
        <p>{completed}</p>
      </div>

      <div className="card">
        <h3>Pending</h3>
        <p>{pending}</p>
      </div>
    </div>
  );
}

export default Dashboard;
import { Link } from "react-router-dom";
import "../App.css";

function AdminDashboard() {
  return (
    <>
      {/* Header */}
      <div className="navbar">Admin Dashboard</div>

      {/* Main Container */}
      <div className="container">
        <h2>Welcome Admin</h2>

        <div className="dashboard-grid">

          {/* Rooms */}
          <Link to="/admin/rooms" className="card">
            🏠 Rooms Management
          </Link>

          {/* Complaints */}
          <Link to="/admin/complaints" className="card">
            🛠 Complaints
          </Link>

          {/* Notices */}
          <Link to="/admin/notices" className="card">
            📢 Notices
          </Link>

          {/* Feedback */}
          <Link to="/admin/feedback" className="card">
            💬 Feedback
          </Link>

          {/* Visitors */}
          <Link to="/admin/visitors" className="card">
            👥 Visitor Requests
          </Link>

        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
import { Link } from "react-router-dom";
import {
  FaBed,
  FaTools,
  FaBullhorn,
  FaCommentDots,
  FaUsers,
  FaChartBar,
} from "react-icons/fa";
import "../App.css";

function AdminDashboard() {
  const cards = [
    {
      title: "Rooms",
      icon: <FaBed />,
      color: "#4F46E5",
      path: "/admin/rooms",
    },
    {
      title: "Complaints",
      icon: <FaTools />,
      color: "#EF4444",
      path: "/admin/complaints",
    },
    {
      title: "Notices",
      icon: <FaBullhorn />,
      color: "#F59E0B",
      path: "/admin/notices",
    },
    {
      title: "Feedback",
      icon: <FaCommentDots />,
      color: "#10B981",
      path: "/admin/feedback",
    },
    {
      title: "Visitors",
      icon: <FaUsers />,
      color: "#06B6D4",
      path: "/admin/visitors",
    },
    {
      title: "Reports",
      icon: <FaChartBar />,
      color: "#8B5CF6",
      path: "/admin/reports",
    },
  ];

  return (
    <>
      <div className="navbar">
        <h2>🏠 Hostel Admin Dashboard</h2>
      </div>

      <div className="container">

        {/* Welcome */}
        <div className="welcome-card">
          <h1>Welcome, Admin 👋</h1>
          <p>Manage hostel operations efficiently from one place.</p>
        </div>

        {/* Statistics */}
        <div className="stats">
          <div className="stat-box">
            <h2>120</h2>
            <p>Total Students</p>
          </div>

          <div className="stat-box">
            <h2>58</h2>
            <p>Rooms Occupied</p>
          </div>

          <div className="stat-box">
            <h2>14</h2>
            <p>Pending Complaints</p>
          </div>

          <div className="stat-box">
            <h2>6</h2>
            <p>Visitor Requests</p>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="dashboard">
          {cards.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="dashboard-card"
              style={{ borderTop: `6px solid ${item.color}` }}
            >
              <div
                className="icon"
                style={{ background: item.color }}
              >
                {item.icon}
              </div>

              <h3>{item.title}</h3>
              <p>Manage {item.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
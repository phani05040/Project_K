import axios from "axios";
import { useEffect, useState } from "react";
import { FaUserFriends, FaCheckCircle, FaCalendarAlt } from "react-icons/fa";
import "../App.css";

function AdminVisitors() {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    fetchVisitors();
  }, []);

  const fetchVisitors = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/visitors");
      setVisitors(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const approveVisitor = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/visitors/${id}`, {
        status: "Approved",
      });

      setVisitors((prev) =>
        prev.map((visitor) =>
          visitor._id === id
            ? { ...visitor, status: "Approved" }
            : visitor
        )
      );

      alert("Visitor Approved Successfully");
    } catch (err) {
      console.error(err);
      alert("Failed to approve visitor.");
    }
  };

  const pending = visitors.filter((v) => v.status === "Pending").length;
  const approved = visitors.filter((v) => v.status === "Approved").length;

  return (
    <div className="container">

      <div className="page-header">
        <h2>👥 Visitor Management</h2>
        <p>Approve or review visitor requests.</p>
      </div>

      {/* Statistics */}
      <div className="stats">
        <div className="stat-box">
          <h2>{visitors.length}</h2>
          <p>Total Requests</p>
        </div>

        <div className="stat-box">
          <h2>{pending}</h2>
          <p>Pending</p>
        </div>

        <div className="stat-box">
          <h2>{approved}</h2>
          <p>Approved</p>
        </div>
      </div>

      {visitors.length === 0 ? (
        <div className="empty-card">
          <h3>No visitor requests found.</h3>
        </div>
      ) : (
        <div className="visitors-grid">
          {visitors.map((v) => (
            <div className="visitor-card" key={v._id}>

              <div className="visitor-icon">
                <FaUserFriends />
              </div>

              <h3>{v.name}</h3>

              <p>
                <strong>Relation:</strong> {v.relation}
              </p>

              <p>
                <FaCalendarAlt /> {v.date}
              </p>

              <span
                className={
                  v.status === "Approved"
                    ? "status approved"
                    : "status pending"
                }
              >
                {v.status}
              </span>

              {v.status === "Pending" ? (
                <button
                  className="btn approve-btn"
                  onClick={() => approveVisitor(v._id)}
                >
                  <FaCheckCircle /> Approve
                </button>
              ) : (
                <button className="btn approved-btn" disabled>
                  ✔ Approved
                </button>
              )}

            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default AdminVisitors;
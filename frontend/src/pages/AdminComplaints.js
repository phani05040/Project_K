import axios from "axios";
import { useEffect, useState } from "react";
import { FaTools, FaCheckCircle } from "react-icons/fa";
import "../App.css";

function AdminComplaints() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/complaints");
      setComplaints(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const resolveComplaint = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/complaints/${id}`, {
        status: "Resolved",
      });

      setComplaints((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, status: "Resolved" } : item
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">

      <div className="page-header">
        <h2>🛠 Complaint Management</h2>
        <p>View and resolve student complaints.</p>
      </div>

      {complaints.length === 0 ? (
        <div className="empty-card">
          <h3>No complaints found.</h3>
        </div>
      ) : (
        <div className="complaints-grid">
          {complaints.map((c, index) => (
            <div className="complaint-card" key={c._id}>

              <div className="complaint-top">
                <div className="complaint-icon">
                  <FaTools />
                </div>

                <span
                  className={
                    c.status === "Resolved"
                      ? "status resolved"
                      : "status pending"
                  }
                >
                  {c.status}
                </span>
              </div>

              <h3>Complaint #{index + 1}</h3>

              <p className="complaint-text">{c.text}</p>

              {c.status !== "Resolved" ? (
                <button
                  className="btn"
                  onClick={() => resolveComplaint(c._id)}
                >
                  <FaCheckCircle /> Resolve
                </button>
              ) : (
                <button className="btn resolved-btn" disabled>
                  ✔ Resolved
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminComplaints;
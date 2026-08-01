import axios from "axios";
import { useEffect, useState } from "react";
import { FaCommentDots } from "react-icons/fa";
import "../App.css";

function AdminFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/feedback");
      setFeedbacks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">

      <div className="page-header">
        <h2>💬 Student Feedback</h2>
        <p>Review feedback submitted by students.</p>
      </div>

      {feedbacks.length === 0 ? (
        <div className="empty-card">
          <h3>No feedback available.</h3>
        </div>
      ) : (
        <div className="feedback-grid">
          {feedbacks.map((f, index) => (
            <div className="feedback-card" key={f._id}>

              <div className="feedback-icon">
                <FaCommentDots />
              </div>

              <h3>Feedback #{index + 1}</h3>

              <p className="feedback-message">
                {f.message}
              </p>

            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default AdminFeedback;
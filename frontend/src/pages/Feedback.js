import axios from "axios";
import { useState } from "react";
import { FaCommentDots, FaPaperPlane } from "react-icons/fa";
import "../App.css";

function Feedback() {
  const [message, setMessage] = useState("");

  const submitFeedback = async () => {
    if (!message.trim()) {
      alert("Please enter your feedback.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/feedback", {
        message,
      });

      alert("Thank you! Your feedback has been submitted.");

      setMessage("");
    } catch (err) {
      console.error(err);
      alert("Failed to send feedback.");
    }
  };

  return (
    <div className="container">

      <div className="page-header">
        <h2>💬 Feedback</h2>
        <p>
          Share your suggestions or comments to help us improve the hostel
          experience.
        </p>
      </div>

      <div className="feedback-form">

        <div className="feedback-form-icon">
          <FaCommentDots />
        </div>

        <textarea
          rows="6"
          placeholder="Write your feedback here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button className="btn feedback-btn" onClick={submitFeedback}>
          <FaPaperPlane /> Send Feedback
        </button>

      </div>

    </div>
  );
}

export default Feedback;
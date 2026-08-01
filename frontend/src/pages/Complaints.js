import axios from "axios";
import { useState } from "react";
import { FaTools, FaPaperPlane } from "react-icons/fa";
import "../App.css";

function Complaints() {
  const [text, setText] = useState("");

  const submitComplaint = async () => {
    if (!text.trim()) {
      alert("Please enter your complaint.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/complaints", {
        text,
      });

      alert("Complaint submitted successfully!");

      setText("");
    } catch (err) {
      console.error(err);
      alert("Failed to submit complaint.");
    }
  };

  return (
    <div className="container">

      <div className="page-header">
        <h2>🛠 Submit Complaint</h2>
        <p>
          Report hostel-related issues. The administration will review your
          complaint as soon as possible.
        </p>
      </div>

      <div className="complaint-form">

        <div className="complaint-form-icon">
          <FaTools />
        </div>

        <textarea
          rows="6"
          placeholder="Describe your complaint..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button className="btn complaint-btn" onClick={submitComplaint}>
          <FaPaperPlane /> Submit Complaint
        </button>

      </div>

    </div>
  );
}

export default Complaints;
import axios from "axios";
import { useState } from "react";
import { FaBullhorn, FaPaperPlane } from "react-icons/fa";
import "../App.css";

function AdminNotices() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addNotice = async () => {
    if (!title.trim() || !content.trim()) {
      alert("Please fill all fields.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/notices", {
        title,
        content,
      });

      alert("Notice Added Successfully!");

      setTitle("");
      setContent("");
    } catch (err) {
      console.error(err);
      alert("Failed to add notice.");
    }
  };

  return (
    <div className="container">

      <div className="page-header">
        <h2>📢 Notice Management</h2>
        <p>Create and publish notices for hostel students.</p>
      </div>

      <div className="notice-form">

        <div className="notice-icon">
          <FaBullhorn />
        </div>

        <input
          type="text"
          placeholder="Enter Notice Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          rows="6"
          placeholder="Enter Notice Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button className="btn notice-btn" onClick={addNotice}>
          <FaPaperPlane /> Publish Notice
        </button>

      </div>

    </div>
  );
}

export default AdminNotices;
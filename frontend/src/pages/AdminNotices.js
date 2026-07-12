import axios from "axios";
import { useState } from "react";

function AdminNotices() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const add = async () => {
    await axios.post("http://localhost:5000/api/notices", {
      title,
      content
    });

    alert("Notice Added");
  };

  return (
    <div className="container">
      <h2>Add Notice</h2>

      <input placeholder="Title" onChange={(e)=>setTitle(e.target.value)} />
      <input placeholder="Content" onChange={(e)=>setContent(e.target.value)} />

      <button onClick={add}>Add</button>
    </div>
  );
}

export default AdminNotices;
import axios from "axios";
import { useEffect, useState } from "react";

function AdminFeedback() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/feedback")
      .then(res => setData(res.data));
  }, []);

  return (
    <div className="container">
      <h2>Feedback</h2>

      {data.map(f => (
        <div className="card" key={f._id}>
          {f.message}
        </div>
      ))}
    </div>
  );
}

export default AdminFeedback;
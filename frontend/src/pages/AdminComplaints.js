import axios from "axios";
import { useEffect, useState } from "react";

function AdminComplaints() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/complaints")
      .then(res => setData(res.data));
  }, []);

  const resolve = async (id) => {
    await axios.put(`http://localhost:5000/api/complaints/${id}`, {
      status: "Resolved"
    });
    window.location.reload();
  };

  return (
    <div className="container">
      <h2>Complaints</h2>

      {data.map(c => (
        <div className="card" key={c._id}>
          <p>{c.text}</p>
          <p>{c.status}</p>

          <button onClick={()=>resolve(c._id)}>Resolve</button>
        </div>
      ))}
    </div>
  );
}

export default AdminComplaints;
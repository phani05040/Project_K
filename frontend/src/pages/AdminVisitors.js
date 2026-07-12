import axios from "axios";
import { useEffect, useState } from "react";

function AdminVisitors() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/visitors")
      .then(res => setData(res.data));
  }, []);

  const approve = async (id) => {
    await axios.put(`http://localhost:5000/api/visitors/${id}`, {
      status: "Approved"
    });
    window.location.reload();
  };

  return (
    <div className="container">
      <h2>Visitor Requests</h2>

      {data.map(v => (
        <div className="card" key={v._id}>
          <p>{v.name} ({v.relation})</p>
          <p>Date: {v.date}</p>
          <p>Status: {v.status}</p>

          {v.status === "Pending" && (
            <button onClick={()=>approve(v._id)}>Approve</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default AdminVisitors;
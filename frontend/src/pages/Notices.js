import axios from "axios";
import { useEffect, useState } from "react";

function Notices() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/notices")
      .then(res => setData(res.data));
  }, []);

  return (
    <div className="container">
      <h2>Notices</h2>

      {data.map(n => (
        <div className="card" key={n._id}>
          <h4>{n.title}</h4>
          <p>{n.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Notices;
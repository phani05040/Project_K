import axios from "axios";
import { useEffect, useState } from "react";

function Rooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/rooms")
      .then(res => setRooms(res.data));
  }, []);

  return (
    <div className="container">
      <h2>Room Details</h2>

      {rooms.map(r => (
        <div className="card" key={r._id}>
          <p>Room No: {r.roomNumber}</p>
          <p>Type: {r.type}</p>
          <p>Status: {r.available ? "Available" : "Occupied"}</p>
          <p>Student: {r.studentName || "None"}</p>
        </div>
      ))}
    </div>
  );
}

export default Rooms;
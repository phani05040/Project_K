import axios from "axios";
import { useEffect, useState } from "react";

function AdminRooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/rooms")
      .then(res => setRooms(res.data));
  }, []);

  const assign = async (id) => {
    const name = prompt("Enter student name");

    await axios.put(`http://localhost:5000/api/rooms/${id}/assign`, {
      studentName: name
    });

    alert("Room Assigned");
    window.location.reload();
  };

  return (
    <div className="container">
      <h2>Manage Rooms</h2>

      {rooms.map(r => (
        <div className="card" key={r._id}>
          <p>{r.roomNumber}</p>
          <p>{r.available ? "Free" : "Occupied"}</p>

          {r.available && (
            <button onClick={() => assign(r._id)}>Assign</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default AdminRooms;
import axios from "axios";
import { useEffect, useState } from "react";
import { FaBed, FaUserPlus } from "react-icons/fa";
import "../App.css";

function AdminRooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/rooms");
      setRooms(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const assignRoom = async (id) => {
    const name = prompt("Enter Student Name");

    if (!name || !name.trim()) return;

    try {
      await axios.put(`http://localhost:5000/api/rooms/${id}/assign`, {
        studentName: name,
      });

      setRooms((prev) =>
        prev.map((room) =>
          room._id === id
            ? {
                ...room,
                available: false,
                studentName: name,
              }
            : room
        )
      );

      alert("Room Assigned Successfully");
    } catch (err) {
      console.error(err);
      alert("Failed to assign room.");
    }
  };

  const total = rooms.length;
  const available = rooms.filter((r) => r.available).length;
  const occupied = total - available;

  return (
    <div className="container">

      <div className="page-header">
        <h2>🏠 Room Management</h2>
        <p>Manage hostel room allocation.</p>
      </div>

      <div className="stats">
        <div className="stat-box">
          <h2>{total}</h2>
          <p>Total Rooms</p>
        </div>

        <div className="stat-box">
          <h2>{available}</h2>
          <p>Available</p>
        </div>

        <div className="stat-box">
          <h2>{occupied}</h2>
          <p>Occupied</p>
        </div>
      </div>

      <div className="rooms-grid">
        {rooms.map((room) => (
          <div className="room-card" key={room._id}>

            <div className="room-icon">
              <FaBed />
            </div>

            <h3>Room {room.roomNumber}</h3>

            <span
              className={
                room.available
                  ? "status available"
                  : "status occupied"
              }
            >
              {room.available ? "Available" : "Occupied"}
            </span>

            {!room.available && room.studentName && (
              <p className="student-name">
                👤 {room.studentName}
              </p>
            )}

            {room.available ? (
              <button
                className="btn assign-btn"
                onClick={() => assignRoom(room._id)}
              >
                <FaUserPlus /> Assign Room
              </button>
            ) : (
              <button className="btn occupied-btn" disabled>
                Occupied
              </button>
            )}

          </div>
        ))}
      </div>

    </div>
  );
}

export default AdminRooms;
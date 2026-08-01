import axios from "axios";
import { useEffect, useState } from "react";
import {
  FaBed,
  FaUser,
  FaDoorOpen,
} from "react-icons/fa";

import "../App.css";


function Rooms() {

  const [rooms, setRooms] = useState([]);



  useEffect(() => {

    fetchRooms();

  }, []);



  const fetchRooms = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/rooms"
      );

      setRooms(res.data);

    } catch(err) {

      console.error(err);

    }

  };



  return (

    <div className="container">


      <div className="page-header">

        <h2>🏠 Room Details</h2>

        <p>
          View hostel room allocation and availability status.
        </p>

      </div>



      {
        rooms.length === 0 ? (

          <div className="empty-card">

            <h3>
              No rooms available
            </h3>

          </div>


        ) : (


          <div className="rooms-grid">


          {
            rooms.map((r)=>(


              <div
                className="student-room-card"
                key={r._id}
              >


                <div className="room-icon">

                  <FaBed />

                </div>



                <h3>
                  Room {r.roomNumber}
                </h3>



                <p>

                  <FaDoorOpen />

                  <strong>
                    {" "} Type:
                  </strong>

                  {" "}
                  {r.type}

                </p>



                <span
                  className={
                    r.available
                    ? "status available"
                    : "status occupied"
                  }
                >

                  {r.available
                    ? "Available"
                    : "Occupied"
                  }

                </span>



                <p className="student-info">

                  <FaUser />

                  {" "}
                  Student:

                  <b>
                    {" "}
                    {r.studentName || "None"}
                  </b>

                </p>



              </div>


            ))

          }


          </div>


        )
      }


    </div>

  );

}


export default Rooms;
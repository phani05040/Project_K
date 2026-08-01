import axios from "axios";
import { useEffect, useState } from "react";
import { FaBullhorn, FaCalendarAlt } from "react-icons/fa";
import "../App.css";


function Notices() {

  const [notices, setNotices] = useState([]);


  useEffect(() => {

    fetchNotices();

  }, []);



  const fetchNotices = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/notices"
      );

      setNotices(res.data);

    } catch(err) {

      console.error(err);

    }

  };



  return (

    <div className="container">


      <div className="page-header">

        <h2>📢 Hostel Notices</h2>

        <p>
          Latest announcements and updates from hostel administration.
        </p>

      </div>



      {
        notices.length === 0 ? (

          <div className="empty-card">
            <h3>No notices available</h3>
          </div>

        ) : (


          <div className="notices-grid">


          {
            notices.map((n,index)=>(


              <div
                className="notice-card"
                key={n._id}
              >


                <div className="notice-top">


                  <div className="notice-icon">

                    <FaBullhorn />

                  </div>


                  <span>
                    Notice #{index+1}
                  </span>


                </div>



                <h3>
                  {n.title}
                </h3>



                <p className="notice-content">

                  {n.content}

                </p>




                {n.createdAt && (

                  <small>

                    <FaCalendarAlt />
                    {" "}
                    {new Date(
                      n.createdAt
                    ).toLocaleDateString()}

                  </small>

                )}



              </div>


            ))

          }


          </div>

        )
      }


    </div>

  );

}


export default Notices;
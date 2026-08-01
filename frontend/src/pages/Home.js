import { Link } from "react-router-dom";
import {
  FaBed,
  FaMoneyBillWave,
  FaTools,
  FaBullhorn,
  FaCommentDots,
  FaUtensils,
  FaUserFriends,
} from "react-icons/fa";

import "../App.css";


function Home() {

  const menu = [
    {
      title: "Rooms",
      icon: <FaBed />,
      path: "/rooms",
      color: "#2563eb",
      text: "View room details",
    },
    {
      title: "Fees",
      icon: <FaMoneyBillWave />,
      path: "/fees",
      color: "#16a34a",
      text: "Manage fee payments",
    },
    {
      title: "Complaints",
      icon: <FaTools />,
      path: "/complaints",
      color: "#dc2626",
      text: "Submit complaints",
    },
    {
      title: "Notices",
      icon: <FaBullhorn />,
      path: "/notices",
      color: "#f59e0b",
      text: "View hostel notices",
    },
    {
      title: "Feedback",
      icon: <FaCommentDots />,
      path: "/feedback",
      color: "#10b981",
      text: "Send feedback",
    },
    {
      title: "Food Menu",
      icon: <FaUtensils />,
      path: "/foodmenu",
      color: "#8b5cf6",
      text: "Check daily meals",
    },
    {
      title: "Visitor",
      icon: <FaUserFriends />,
      path: "/visitor",
      color: "#06b6d4",
      text: "Manage visitors",
    },
  ];


  return (

    <div className="container">


      {/* Welcome */}
      <div className="welcome-card">

        <h1>
          Welcome Student 👋
        </h1>

        <p>
          Access all hostel services from one dashboard.
        </p>

      </div>



      {/* Student Info */}
      <div className="stats">

        <div className="stat-box">
          <h2>101</h2>
          <p>Room Number</p>
        </div>


        <div className="stat-box">
          <h2>₹30000</h2>
          <p>Paid Fees</p>
        </div>


        <div className="stat-box">
          <h2>3</h2>
          <p>Active Requests</p>
        </div>

      </div>



      {/* Dashboard Cards */}
      <div className="dashboard">


        {menu.map((item,index)=>(

          <Link
            to={item.path}
            className="dashboard-card"
            key={index}
            style={{
              borderTop:`5px solid ${item.color}`
            }}
          >


            <div
              className="icon"
              style={{
                background:item.color
              }}
            >
              {item.icon}
            </div>


            <h3>
              {item.title}
            </h3>


            <p>
              {item.text}
            </p>


          </Link>

        ))}


      </div>


    </div>

  );
}


export default Home;
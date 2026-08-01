import axios from "axios";
import { useState } from "react";
import {
  FaUserFriends,
  FaCalendarAlt,
  FaPaperPlane,
} from "react-icons/fa";

import "../App.css";


function Visitor() {

  const [name, setName] = useState("");
  const [relation, setRelation] = useState("");
  const [date, setDate] = useState("");



  const submitVisitor = async () => {


    if(!name || !relation || !date){

      alert("Please fill all details.");
      return;

    }


    try {

      await axios.post(
        "http://localhost:5000/api/visitors",
        {
          name,
          relation,
          date,
        }
      );


      alert("Visitor Request Sent Successfully");


      setName("");
      setRelation("");
      setDate("");


    } catch(err){

      console.error(err);

      alert("Failed to send visitor request");

    }


  };



  return (

    <div className="container">


      <div className="page-header">

        <h2>👥 Visitor Registration</h2>

        <p>
          Register visitor details before their hostel visit.
        </p>

      </div>




      <div className="visitor-form">


        <div className="visitor-form-icon">

          <FaUserFriends />

        </div>



        <div className="form-input">


          <FaUserFriends />

          <input
            type="text"
            placeholder="Visitor Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />


        </div>



        <div className="form-input">


          <input
            type="text"
            placeholder="Relationship (Father, Friend, etc.)"
            value={relation}
            onChange={(e)=>setRelation(e.target.value)}
          />


        </div>




        <div className="form-input">


          <FaCalendarAlt />


          <input
            type="date"
            value={date}
            onChange={(e)=>setDate(e.target.value)}
          />


        </div>




        <button
          className="btn visitor-btn"
          onClick={submitVisitor}
        >

          <FaPaperPlane />

          Submit Request

        </button>



      </div>



    </div>

  );

}


export default Visitor;
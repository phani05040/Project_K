import axios from "axios";
import { useState } from "react";

function Complaints() {
  const [text, setText] = useState("");

  const submit = async () => {
    await axios.post("http://localhost:5000/api/complaints", { text });
    alert("Complaint Submitted");
  };

  return (
    <div className="container">
      <h2>Submit Complaint</h2>

      <input onChange={(e)=>setText(e.target.value)} />

      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default Complaints;
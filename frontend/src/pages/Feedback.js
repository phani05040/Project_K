import axios from "axios";
import { useState } from "react";

function Feedback() {
  const [message, setMessage] = useState("");

  const submit = async () => {
    await axios.post("http://localhost:5000/api/feedback", { message });
    alert("Feedback Sent");
  };

  return (
    <div className="container">
      <h2>Feedback</h2>

      <input onChange={(e)=>setMessage(e.target.value)} />

      <button onClick={submit}>Send</button>
    </div>
  );
}

export default Feedback;
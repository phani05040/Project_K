import axios from "axios";
import { useState } from "react";

function Visitor() {
  const [name, setName] = useState("");
  const [relation, setRelation] = useState("");
  const [date, setDate] = useState("");

  const submit = async () => {
    await axios.post("http://localhost:5000/api/visitors", {
      name, relation, date
    });
    alert("Visitor Request Sent");
  };

  return (
    <div className="container">
      <h2>Visitor Registration</h2>

      <input placeholder="Name" onChange={(e)=>setName(e.target.value)} />
      <input placeholder="Relation" onChange={(e)=>setRelation(e.target.value)} />
      <input type="date" onChange={(e)=>setDate(e.target.value)} />

      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default Visitor;
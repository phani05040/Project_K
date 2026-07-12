import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h2>Student Dashboard</h2>

      <div className="dashboard">

        <Link to="/rooms">Rooms</Link>
        <Link to="/fees">Fees</Link>
        <Link to="/complaints">Complaints</Link>
        <Link to="/notices">Notices</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/foodmenu">Food Menu</Link>
        <Link to="/visitor">Visitor</Link>

      </div>
    </div>
  );
}

export default Home;
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Student Pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Fees from "./pages/Fees";
import Complaints from "./pages/Complaints";
import Notices from "./pages/Notices";
import Feedback from "./pages/Feedback";
import FoodMenu from "./pages/FoodMenu";
import Visitor from "./pages/Visitor";

// Admin Pages
import AdminDashboard from "./pages/AdminDashboard";
import AdminRooms from "./pages/AdminRooms";
import AdminComplaints from "./pages/AdminComplaints";
import AdminNotices from "./pages/AdminNotices";
import AdminFeedback from "./pages/AdminFeedback";
import AdminVisitors from "./pages/AdminVisitors";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Student */}
        <Route path="/home" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/foodmenu" element={<FoodMenu />} />
        <Route path="/visitor" element={<Visitor />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/rooms" element={<AdminRooms />} />
        <Route path="/admin/complaints" element={<AdminComplaints />} />
        <Route path="/admin/notices" element={<AdminNotices />} />
        <Route path="/admin/feedback" element={<AdminFeedback />} />
        <Route path="/admin/visitors" element={<AdminVisitors />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
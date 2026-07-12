const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/rooms", require("./routes/roomRoutes"));
app.use("/api/complaints", require("./routes/complaintRoutes"));
app.use("/api/notices", require("./routes/noticeRoutes"));
app.use("/api/feedback", require("./routes/feedbackRoutes"));
app.use("/api/visitors", require("./routes/visitorRoutes"));
app.use("/api/payment", require("./routes/paymentRoutes"));

app.listen(5000, () => console.log("Server running"));
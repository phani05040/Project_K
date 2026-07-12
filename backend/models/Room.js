const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomNumber: String,
  type: String,
  available: { type: Boolean, default: true },
  studentName: String
});

module.exports = mongoose.model("Room", roomSchema);
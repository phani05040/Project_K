const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema({
  name: String,
  relation: String,
  date: String,
  status: { type: String, default: "Pending" }
});

module.exports = mongoose.model("Visitor", visitorSchema);
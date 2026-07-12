const express = require("express");
const router = express.Router();   // ✅ IMPORTANT
const Complaint = require("../models/Complaint");

// CREATE complaint
router.post("/", async (req, res) => {
  const data = await new Complaint(req.body).save();
  res.json(data);
});

// GET all complaints (ADMIN)
router.get("/", async (req, res) => {
  const data = await Complaint.find();
  res.json(data);
});

// UPDATE complaint status
router.put("/:id", async (req, res) => {
  await Complaint.findByIdAndUpdate(req.params.id, {
    status: req.body.status
  });
  res.send("Updated");
});

module.exports = router;   // ✅ IMPORTANT
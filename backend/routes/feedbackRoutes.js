const express = require("express");
const router = express.Router();   // ✅ REQUIRED
const Feedback = require("../models/Feedback");

// ADD feedback (student)
router.post("/", async (req, res) => {
  const data = await new Feedback(req.body).save();
  res.json(data);
});

// GET all feedback (admin)
router.get("/", async (req, res) => {
  const data = await Feedback.find();
  res.json(data);
});

module.exports = router;   // ✅ REQUIRED
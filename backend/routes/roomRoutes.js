const router = require("express").Router();
const Room = require("../models/Room");

// get all rooms
router.get("/", async (req, res) => {
  const data = await Room.find();
  res.json(data);
});

// assign room
router.put("/:id/assign", async (req, res) => {
  await Room.findByIdAndUpdate(req.params.id, {
    available: false,
    studentName: req.body.studentName
  });
  res.send("Room Assigned");
});

module.exports = router;
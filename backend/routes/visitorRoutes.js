const router = require("express").Router();
const Visitor = require("../models/Visitor");

// Student registers visitor
router.post("/", async (req, res) => {
  const data = await new Visitor(req.body).save();
  res.json(data);
});

// Admin views all visitors
router.get("/", async (req, res) => {
  const data = await Visitor.find();
  res.json(data);
});

// Admin approves visitor
router.put("/:id", async (req, res) => {
  await Visitor.findByIdAndUpdate(req.params.id, {
    status: req.body.status
  });
  res.send("Updated");
});

module.exports = router;
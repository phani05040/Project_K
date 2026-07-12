const router = require("express").Router();
const Notice = require("../models/Notice");

router.post("/", async (req, res) => {
  const data = await new Notice(req.body).save();
  res.json(data);
});

router.get("/", async (req, res) => {
  const data = await Notice.find();
  res.json(data);
});

module.exports = router;
const express = require("express");
const router = express.Router();
const { addSubscriber } = require("../brevo");

router.post("/subscribe", async (req, res) => {
  const { email, FirstName } = req.body;
  if (!email) return res.status(400).json({ error: "Email is required" });

  try {
    await addSubscriber(email,FirstName);
    res.json({ message: "You’ve joined the Montero waitlist!" });
  } catch (err) {
    console.log(err,"hh");
    
    res.status(500).json({ error: "Subscription failed", details: err.message });
  }
});

module.exports = router;

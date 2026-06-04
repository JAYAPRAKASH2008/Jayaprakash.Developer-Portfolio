require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Message = require("./Message");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({ origin: "http://localhost:5174" }));
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "portfolioDB",
  })
  .then(() => console.log("✅ MongoDB Atlas connected"))
  .catch((err) => console.error("❌ MongoDB Atlas error:", err.message));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const saved = await Message.create({
      name,
      email,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      id: saved._id,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to save message" });
  }
});

app.get("/api/messages", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

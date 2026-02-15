const express = require("express");

const app = express();

// Railway נותן PORT אוטומטי
const PORT = process.env.PORT || 8080;

app.use(express.json());

// בדיקה שהשרת חי
app.get("/", (req, res) => {
  res.send("WhatsApp Bot is Running 🚀");
});

// Webhook מ-Meta
app.post("/webhook", (req, res) => {
  console.log("Webhook received:", JSON.stringify(req.body, null, 2));
  res.sendStatus(200);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

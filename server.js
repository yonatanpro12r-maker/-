const express = require("express");
const app = express();

// חובה ל-Railway
const PORT = process.env.PORT || 8080;

app.use(express.json());

// בדיקת חיים
app.get("/", (req, res) => {
  res.send("Bot is running 🚀");
});

// Webhook (לעתיד)
app.post("/webhook", (req, res) => {
  console.log("Webhook:", req.body);
  res.sendStatus(200);
});

// הפעלה
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});

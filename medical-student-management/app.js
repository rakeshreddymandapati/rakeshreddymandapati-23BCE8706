const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Load env variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const adminRoutes = require("./routes/admin");
const studentRoutes = require("./routes/student");

// 🔍 Debugging line for auth middleware type
console.log("auth type:", typeof require("./middleware/auth")); // should print: function

app.use("/api/admin", adminRoutes);
app.use("/api/students", studentRoutes);

// Optional debug
console.log("adminRoutes:", adminRoutes);
console.log("studentRoutes:", studentRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_DB_URL)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 8070;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

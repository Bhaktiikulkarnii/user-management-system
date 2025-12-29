const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const { protect } = require("./middlewares/authMiddleware");

const app = express();

// --------------------
// Global Middleware
// --------------------
app.use(cors());
app.use(express.json());

// --------------------
// Routes
// --------------------

// Health check
app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

// Auth routes
app.use("/api/auth", authRoutes);

// User & Admin routes
app.use("/api/users", userRoutes);

// Protected test route
app.get("/api/protected", protect, (req, res) => {
  res.status(200).json({
    message: "Protected route accessed",
    user: req.user,
  });
});

// --------------------
// MongoDB Connection
// --------------------
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
  });

// --------------------
// Start Server (important for Jest)
// --------------------
const PORT = process.env.PORT || 5000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;

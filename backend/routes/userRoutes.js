const express = require("express");
const router = express.Router();

const { protect } = require("../middlewares/authMiddleware");
const { adminOnly } = require("../middlewares/roleMiddleware");

const {
  getMe,
  updateProfile,
  changePassword,
  getAllUsers,
  updateUserStatus,
} = require("../controllers/userController");

// User routes
router.get("/me", protect, getMe);
router.put("/me", protect, updateProfile);
router.put("/change-password", protect, changePassword);

// Admin routes
router.get("/", protect, adminOnly, getAllUsers);
router.put("/:id/status", protect, adminOnly, updateUserStatus);

module.exports = router;

const User = require("../models/User");
const bcrypt = require("bcrypt");

// Get current logged-in user
exports.getMe = async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.status(200).json(user);
};

// Update profile (name & email)
exports.updateProfile = async (req, res) => {
  const { fullName, email } = req.body;

  const user = await User.findByIdAndUpdate(
    req.user.id,
    { fullName, email },
    { new: true }
  ).select("-password");

  res.status(200).json({
    message: "Profile updated",
    user,
  });
};

// Change password
exports.changePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  const user = await User.findById(req.user.id);

  const isMatch = await bcrypt.compare(oldPassword, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Old password incorrect" });
  }

  user.password = await bcrypt.hash(newPassword, 10);
  await user.save();

  res.status(200).json({ message: "Password changed successfully" });
};

// Admin: get all users (pagination)
exports.getAllUsers = async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;

  const users = await User.find()
    .select("-password")
    .skip(skip)
    .limit(limit);

  const total = await User.countDocuments();

  res.status(200).json({
    total,
    page,
    users,
  });
};

// Admin: activate / deactivate user
exports.updateUserStatus = async (req, res) => {
  const { status } = req.body;

  const user = await User.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true }
  ).select("-password");

  res.status(200).json({
    message: `User ${status} successfully`,
    user,
  });
};

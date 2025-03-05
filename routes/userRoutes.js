const express = require("express");
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  loginUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", createUser); // Register a new user
router.post("/login", loginUser); // User login
router.get("/", getAllUsers); // Get all users
router.get("/:id", getUserById); // Get user by ID
router.put("/:id", updateUser); // Update user
router.delete("/:id", deleteUser); // Delete user

module.exports = router;

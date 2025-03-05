const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  const user = req.body;

  try {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;

    User.create(user, (err, results) => {
      if (err)
        return res
          .status(500)
          .json({ message: "Error creating user.", error: err });
      res.status(201).json({
        message: "User created successfully.",
        userId: results.insertId,
      });
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating user.", error });
  }
};

const getAllUsers = (req, res) => {
  User.findAll((err, results) => {
    if (err)
      return res
        .status(500)
        .json({ message: "Error fetching users.", error: err });
    res.json(results);
  });
};

const getUserById = (req, res) => {
  const id = req.params.id;

  User.findById(id, (err, results) => {
    if (err)
      return res
        .status(500)
        .json({ message: "Error fetching user.", error: err });
    if (results.length === 0)
      return res.status(404).json({ message: "User not found." });
    res.json(results[0]);
  });
};

const updateUser = (req, res) => {
  const id = req.params.id;
  const updatedUser = req.body;

  User.update(id, updatedUser, (err) => {
    if (err)
      return res
        .status(500)
        .json({ message: "Error updating user.", error: err });
    res.json({ message: "User updated successfully." });
  });
};

const deleteUser = (req, res) => {
  const id = req.params.id;

  User.delete(id, (err) => {
    if (err)
      return res
        .status(500)
        .json({ message: "Error deleting user.", error: err });
    res.json({ message: "User deleted successfully." });
  });
};

const loginUser = (req, res) => {
  const { email, password } = req.body;

  User.findByEmail(email, async (err, results) => {
    if (err)
      return res.status(500).json({ message: "Error logging in.", error: err });
    if (results.length === 0)
      return res.status(404).json({ message: "User not found." });

    const user = results[0];
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch)
      return res.status(401).json({ message: "Invalid credentials." });

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ message: "Login successful.", token });
  });
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  loginUser,
};

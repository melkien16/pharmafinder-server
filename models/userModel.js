const db = require("../config/db");

const User = {
  create: (user, callback) => {
    const query = `INSERT INTO users (name, email, password, phone, address, bio, role, fullcontrol) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [
      user.name,
      user.email,
      user.password,
      user.phone,
      user.address,
      user.bio,
      user.role,
      user.fullcontrol,
    ];
    db.query(query, values, callback);
  },
  findAll: (callback) => {
    const query = `SELECT id, name, email, phone, password, address, bio, role, fullcontrol FROM users`;
    db.query(query, callback);
  },
  findById: (id, callback) => {
    const query = `SELECT id, name, email, phone, address, bio, role, fullcontrol FROM users WHERE id = ?`;
    db.query(query, [id], callback);
  },
  findByEmail: (email, callback) => {
    const query = `SELECT * FROM users WHERE email = ?`;
    db.query(query, [email], callback);
  },
  update: (id, updatedUser, callback) => {
    const query = `UPDATE users SET name = ?, email = ?, phone = ?, address = ?, bio = ?, role = ?, fullcontrol = ? WHERE id = ?`;
    const values = [
      updatedUser.name,
      updatedUser.email,
      updatedUser.phone,
      updatedUser.address,
      updatedUser.bio,
      updatedUser.role,
      updatedUser.fullcontrol,
      id,
    ];
    db.query(query, values, callback);
  },
  delete: (id, callback) => {
    const query = `DELETE FROM users WHERE id = ?`;
    db.query(query, [id], callback);
  },
};

module.exports = User;

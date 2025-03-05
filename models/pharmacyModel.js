const db = require("../config/db");

const Pharmacy = {
  create: (pharmacy, callback) => {
    const query = `
    INSERT INTO Pharmacies (name, owner, email, password, address, contact, openingTime, closingTime, bio, ban, rating, role, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
    const values = [
      pharmacy.name,
      pharmacy.owner,
      pharmacy.email,
      pharmacy.password,
      pharmacy.address,
      pharmacy.contact,
      pharmacy.openingTime,
      pharmacy.closingTime,
      pharmacy.bio || null,
      pharmacy.ban || 0,
      pharmacy.rating || 0,
      pharmacy.role || "pharmacist",
      pharmacy.status || "pending",
    ];
    db.query(query, values, callback);
  },

  // Retrieve all pharmacies
  findAll: (callback) => {
    const query = `SELECT * FROM Pharmacies`;
    db.query(query, callback);
  },

  // Find a pharmacy by its ID
  findById: (id, callback) => {
    const query = `SELECT * FROM Pharmacies WHERE id = ?`;
    db.query(query, [id], callback);
  },

  // Find pharmacies by their status
  findByStatus: (callback) => {
    const query = `SELECT * FROM Pharmacies WHERE status = "pending"`;
    db.query(query, callback);
  },

  // Find a pharmacy by its email
  findByEmail: (email, callback) => {
    const query = `SELECT * FROM Pharmacies WHERE email = ?`;
    db.query(query, [email], callback);
  },

  // Update a pharmacy
  update: (id, updatedPharmacy, callback) => {
    const query = `
      UPDATE Pharmacies
      SET name = ?, owner = ?, email = ?, address = ?, contact = ?, openingTime = ?, closingTime = ?, bio = ?, ban = ?, rating = ?, role = ?, status = ? 
      WHERE id = ?
    `;
    const values = [
      updatedPharmacy.name,
      updatedPharmacy.owner,
      updatedPharmacy.email,
      updatedPharmacy.address,
      updatedPharmacy.contact,
      updatedPharmacy.openingTime,
      updatedPharmacy.closingTime,
      updatedPharmacy.bio || null,
      updatedPharmacy.ban || 0,
      updatedPharmacy.rating || 0,
      updatedPharmacy.role || "user",
      updatedPharmacy.status || "pending",
      id,
    ];
    db.query(query, values, callback);
  },

  updateStatus: (id, status, callback) => {
    const query = `UPDATE Pharmacies SET status = ? WHERE id = ?`;
    db.query(query, [status, id], callback);
  },

  updateBan: (id, ban, callback) => {
    const query = `UPDATE Pharmacies SET ban = ? WHERE id = ?`;
    db.query(query, [ban, id], callback);
  },

  // Delete a pharmacy
  delete: (id, callback) => {
    const query = `DELETE FROM Pharmacies WHERE id = ?`;
    db.query(query, [id], callback);
  },
};

module.exports = Pharmacy;

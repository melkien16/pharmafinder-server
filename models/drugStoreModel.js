const db = require("../config/db");

const DrugStore = {
  create: (drug, callback) => {
    const query = `INSERT INTO Drugstore (drug_name, category, description, price, type, quantity, pharmacyID)
    VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const values = [
      drug.drug_name,
      drug.category,
      drug.description,
      drug.price,
      drug.type,
      drug.quantity,
      drug.pharmacyID,
    ];
    db.query(query, values, callback);
  },
  findAll: (callback) => {
    const query = `SELECT * FROM DrugStore`;
    db.query(query, callback);
  },
  findById: (id, callback) => {
    const query = `SELECT * FROM DrugStore WHERE id = ?`;
    db.query(query, [id], callback);
  },

  findByPharmacyID: (pharmacyID, callback) => {
    const query = `SELECT * FROM DrugStore WHERE pharmacyID = ?`;
    db.query(query, [pharmacyID], callback);
  },

  update: (id, updatedDrug, callback) => {
    const query = `UPDATE DrugStore 
                   SET price = ?, quantity = ? 
                   WHERE id = ?`;

    const values = [updatedDrug.price, updatedDrug.quantity, id];

    db.query(query, values, callback);
  },
  delete: (id, callback) => {
    const query = `DELETE FROM DrugStore WHERE id = ?`;
    db.query(query, [id], callback);
  },
};

module.exports = DrugStore;

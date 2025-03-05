const express = require("express");
const {
  createDrug,
  getAllDrugs,
  getDrugById,
  getDrugsByPharmacyID,
  updateDrug,
  deleteDrug,
} = require("../controllers/drugStoreController");

const router = express.Router();

router.post("/", createDrug); // Create drug
router.get("/", getAllDrugs); // Get all drugs
router.get("/:id", getDrugsByPharmacyID); // Get drug by ID
router.put("/:id", updateDrug); // Update drug
router.delete("/:id", deleteDrug); // Delete drug

module.exports = router;

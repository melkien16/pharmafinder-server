const express = require("express");
const {
  createPharmacy,
  getAllPharmacies,
  getPharmacyById,
  getPharmaciesByStatus,
  updatePharmacy,
  updateStatus,
  updateBan,
  deletePharmacy,
  loginPharmacy,
} = require("../controllers/pharmacyController");

const router = express.Router();

// Routes for pharmacy operations
router.post("/register", createPharmacy); // Register a new pharmacy
router.post("/login", loginPharmacy); // Pharmacy login
router.get("/", getAllPharmacies); // Get all pharmacies
router.get("/pending", getPharmaciesByStatus); // Get pending pharmacies
router.put("/:id/status", updateStatus); // Update pharmacy status
router.put("/:id/ban", updateBan); // Update pharmacy ban status
router.get("/:id", getPharmacyById); // Get pharmacy by ID
router.put("/:id", updatePharmacy); // Update pharmacy
router.delete("/:id", deletePharmacy); // Delete pharmacy

module.exports = router;

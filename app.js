require("dotenv").config();
const express = require("express");
const pharmacyRoutes = require("./routes/pharmacyRoutes");
const userRoutes = require("./routes/userRoutes");
const drugStoreRoutes = require("./routes/drugStoreRoutes");
require("dotenv").config();

const cors = require("cors"); // Import cors

const app = express();

// Enable CORS for all origins
app.use(cors());

// Middleware to parse incoming JSON requests
app.use(express.json());

// Set up routes
app.use("/pharmacies", pharmacyRoutes); // Pharmacy-related routes
app.use("/users", userRoutes); // User-related routes
app.use("/drugstore", drugStoreRoutes); // Drugstore-related routes

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const express = require("express");
const router = express.Router();

// Niddleware specific to this router
router.use((req, res, next) => {
  console.log("Users Router Time:", Date.now());
  next();
});

// Define routes
router.get("/", (req, res) => {
  res.send("Users Home Page");
});

router.get("/profile", (req, res) => {
  res.send("User profile for ID: ${req.params.id}");
});

module.exports = router;

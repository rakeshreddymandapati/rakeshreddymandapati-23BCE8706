// routes/admin.js
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.post("/register", adminController.register);
router.post("/login", adminController.login);

// Optional test route
router.get("/test", (req, res) => {
  res.send("Admin route working!");
});

module.exports = router;

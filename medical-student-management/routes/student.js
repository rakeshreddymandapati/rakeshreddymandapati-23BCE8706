// routes/student.js

const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const auth = require("../middleware/auth");

// ✅ CREATE student
router.post("/create", auth, studentController.addStudent);
// Or without auth:
// router.post("/create", studentController.addStudent);

// ✅ GET all students
router.get("/", auth, studentController.getStudents);
// Or without auth:
// router.get("/", studentController.getStudents);

// ✅ UPDATE student
router.put("/update/:id", auth, studentController.updateStudent);
// Or without auth:
// router.put("/update/:id", studentController.updateStudent);

// ✅ DELETE student
router.delete("/delete/:id", auth, studentController.deleteStudent);
// Or without auth:
// router.delete("/delete/:id", studentController.deleteStudent);

module.exports = router;

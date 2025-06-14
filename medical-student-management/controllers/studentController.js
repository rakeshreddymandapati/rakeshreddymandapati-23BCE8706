// controllers/studentController.js

const Student = require("../models/Student");

// ✅ Add a new student and save to DB
exports.addStudent = async (req, res) => {
    try {
      const newStudent = new Student(req.body);
      await newStudent.save();
      res.status(201).json({ message: "Student added successfully" });
    } catch (error) {
      if (error.code === 11000) {
        return res.status(400).json({
          message: "A student with this email already exists.",
          field: error.keyValue
        });
      }
      res.status(500).json({ message: "Failed to add student", error });
    }
  };
  
// ✅ Get all students
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch students", error });
  }
};

// Update student by ID
exports.updateStudent = async (req, res) => {
    try {
      const updatedStudent = await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedStudent) {
        return res.status(404).json({ message: "Student not found" });
      }
      res.status(200).json(updatedStudent);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
// ✅ Delete a student by ID
exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete student", error });
  }
};

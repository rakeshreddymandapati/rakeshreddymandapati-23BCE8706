const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  course: { type: String, required: true },
  year: { type: Number, required: true },
});

module.exports = mongoose.model("Student", studentSchema);

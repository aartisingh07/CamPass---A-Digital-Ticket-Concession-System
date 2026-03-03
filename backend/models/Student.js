const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  prn: { type: String, unique: true },
  branch: String,
  mobile: String,
  aadhar: String,
  caste: String,
  address: {
    city: String,
    pincode: String
  }
});

module.exports = mongoose.model("Student", studentSchema);
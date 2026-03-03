const Student = require("../models/Student");

const studentLogin = async (req, res) => {
  const { prn, name, mobile } = req.body;

  try {
    const student = await Student.findOne({
      prn,
      name,
      mobile
    });

    if (!student) {
      return res.status(401).json({
        success: false,
        message: "Student record not found. Check details."
      });
    }

    res.status(200).json({
      success: true,
      message: "Login successful",
      student
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

module.exports = { studentLogin };
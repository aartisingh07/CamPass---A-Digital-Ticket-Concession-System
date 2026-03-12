const Student = require("../models/Student");
const StudentDocuments = require("../models/StudentDocuments");

const extractAadharNumber = require("../utils/aadharOCR");
const path = require("path");

const studentLogin = async (req, res) => {
  const { prn, name, mobile, password } = req.body;

  try {
    const student = await Student.findOne({
      prn,
      name,
      mobile,
      password
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


const uploadDocuments = async (req, res) => {
  console.log("FILES RECEIVED:", req.files);

  try {

    const { studentId, fromStation, aadharNumber, category } = req.body;

    const existingApplication = await StudentDocuments.findOne({
      studentId,
      academicYear: "2025-2026"
    });

    if (existingApplication) {

      if (existingApplication.status === "PENDING") {
        return res.status(400).json({
          success: false,
          message: "Your documents are under review"
        });
      }

      if (existingApplication.status === "APPROVED") {
        return res.status(400).json({
          success: false,
          message: "Documents already approved. You cannot upload again."
        });
      }
    }

    const student = await Student.findById(studentId);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found"
      });
    }

    // Caste validation
    if (
      (student.caste === "Open" || student.caste === "OBC") &&
      category === "SCST"
    ) {
      return res.status(400).json({
        success: false,
        message: "You are not eligible for SC/ST category"
      });
    }

    if (category === "SCST" && !req.files["casteCertificate"]) {
      return res.status(400).json({
        success: false,
        message: "Caste certificate required for SC/ST"
      });
    }

    // -------- OCR Aadhaar Verification --------

    const aadharFilePath = path.join(
      __dirname,
      "../uploads/documents",
      req.files["aadhar"][0].filename
    );

    const extractedAadhar = await extractAadharNumber(aadharFilePath);

    if (!extractedAadhar || extractedAadhar !== student.aadhar) {
      return res.status(400).json({
        success: false,
        message: "Uploaded Aadhaar does not match student records"
      });
    }

    // -------- Save documents --------

    const documents = new StudentDocuments({

      studentId,
      academicYear: "2025-2026",
      category,
      fromStation,
      aadharNumber,

      aadharFile: req.files["aadhar"][0].filename,
      electricityBillFile: req.files["electricity"][0].filename,

      casteCertificateFile:
        category === "SCST"
          ? req.files["casteCertificate"][0].filename
          : null

    });

    await documents.save();

    res.json({
      success: true,
      message: "Documents uploaded successfully"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};
const StudentNotification = require("../models/StudentNotification");


const getStudentNotifications = async (req,res)=>{

  try{

    const notifications = await StudentNotification.find({
      student_id:req.params.studentId
    });

    res.json(notifications);

  }catch(error){

    res.status(500).json({message:"Error fetching notifications"});

  }

};


const markStudentNotificationRead = async (req,res)=>{

  try{

    const updated = await StudentNotification.findByIdAndUpdate(
      req.params.id,
      {view:"read"},
      {new:true}
    );

    res.json(updated);

  }catch(error){

    res.status(500).json({message:"Error updating notification"});

  }

};

const applyConcession = async (req, res) => {

  try {

    const { studentId, period } = req.body;

    const record = await StudentDocuments.findOne({ studentId });

    if (!record) {
      return res.status(400).json({
        success:false,
        message:"Upload documents first"
      });
    }

    if (record.status !== "ACTIVE") {
      return res.status(400).json({
        success:false,
        message:"Documents not approved yet"
      });
    }

    if (record.concessionStatus === "COMPLETED") {
      return res.status(400).json({
        success:false,
        message:"You already applied concession"
      });
    }

    let expiryDate = new Date();

    if (period === "monthly") {
      expiryDate.setMonth(expiryDate.getMonth() + 1);
    }

    if (period === "quarterly") {
      expiryDate.setMonth(expiryDate.getMonth() + 3);
    }

    record.concessionStatus = "COMPLETED";
    record.concessionExpiry = expiryDate;

    await record.save();

    res.json({
      success:true,
      message:"Concession applied successfully",
      expiry: expiryDate
    });

  } catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }

};

module.exports = {
  studentLogin,
  uploadDocuments,
  applyConcession,
  getStudentNotifications,
  markStudentNotificationRead
};
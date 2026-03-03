const express = require("express");
const router = express.Router();
const { studentLogin } = require("../controllers/studentController");

router.post("/login", studentLogin);

module.exports = router;
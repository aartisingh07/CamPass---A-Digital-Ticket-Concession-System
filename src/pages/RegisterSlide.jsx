import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import "../styles/registerSlide.css";

function RegisterSlide() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );
  useEffect(() => {
        document.body.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
      }, [theme]);
    
    
    // STUDENT FORM STATE
    const [studentData, setStudentData] = useState({
    prn: "",
    name: "",
    mobile: "",
    });

    // ERROR STATE
    const [error, setError] = useState("");

    const handleStudentRegister = (e) => {
        e.preventDefault();
        setError("");

        const { prn, name, mobile } = studentData;

        if (!prn || !name || !mobile) {
            setError("All student fields are required.");
            return;
        }

        // ✅ PRN FORMAT CHECK (2 letters + 16 digits)
        const prnPattern = /^[A-Za-z]{2}\d{16}$/;

        if (!prnPattern.test(prn)) {
            setError(
            "PRN must be exactly 18 characters: first 2 letters followed by 16 digits."
            );
            return;
        }

        // ✅ PASSED ALL CHECKS
        console.log("Student Registered:", studentData);
        };

    const handleStudentChange = (e) => {
        const { name, value } = e.target;

        setStudentData({
            ...studentData,
            [name]: name === "prn" ? value.toUpperCase() : value,
        });
        };



  return (
    <div className="register-page">

      {/* REGISTER PAGE HEADER */}
        <header className="register-header">
        <div className="register-header-inner">
            <i className="fa-solid fa-graduation-cap sidebar-logo-icon"></i>
            <h2>CamPass - Registration Portal</h2>
        </div>
        {/* RIGHT */}
            <div className="header-right">
                <span
                className="icon theme-toggle"
                onClick={() =>
                    setTheme(theme === "light" ? "dark" : "light")
                }
                title="Toggle theme"
                >
                {theme === "light" ? "🌙" : "☀️"}
                </span>
            </div>
        </header>

      {/* CENTER CONTENT */}
      <div className="register-content">
        <div className={`container ${isAdmin ? "right-panel-active" : ""}`}>

          {/* STUDENT FORM */}
          <div className="form-container student-container">
            <form onSubmit={handleStudentRegister}>
                <h1>Student Registration</h1>

                {error && <p className="form-error">{error}</p>}

                <input
                type="text"
                name="prn"
                placeholder="PRN Number (e.g. AB1234...)"
                value={studentData.prn}
                onChange={handleStudentChange}
                maxLength={18}
                />

                <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={studentData.name}
                onChange={handleStudentChange}
                />

                <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={studentData.mobile}
                onChange={handleStudentChange}
                />

                <button type="submit">Register</button>
            </form>
            </div>

          {/* ADMIN FORM */}
          <div className="form-container admin-container">
            <form>
              <h1>Admin Login</h1>

              <input type="email" placeholder="College Email" required />
              <input type="password" placeholder="Password" required />

              <button>Login</button>
            </form>
          </div>

          {/* OVERLAY */}
          <div className="overlay-container">
            <div className="overlay">

              <div className="overlay-panel overlay-left">
                <h1>Student?</h1>
                <p>Register using PRN & Mobile Number</p>
                <button className="ghost" onClick={() => setIsAdmin(false)}>
                  Student Register
                </button>
              </div>

              <div className="overlay-panel overlay-right">
                <h1>College Staff?</h1>
                <p>Login with your admin credentials</p>
                <button className="ghost" onClick={() => setIsAdmin(true)}>
                  Admin Login
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default RegisterSlide;
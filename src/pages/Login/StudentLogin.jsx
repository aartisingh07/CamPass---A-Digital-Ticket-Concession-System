import { useState, useEffect } from "react";
import "../../styles/Login/auth.css";
import "../../styles/Components Files/footer.css";

function StudentLogin() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const [studentData, setStudentData] = useState({
    prn: "",
    name: "",
    mobile: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setStudentData({
      ...studentData,
      [name]: name === "prn" ? value.toUpperCase() : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const { prn, name, mobile } = studentData;

    // 🔴 All required
    if (!prn || !name || !mobile) {
      setError("All fields are required.");
      return;
    }

    // 🔴 PRN Strict Check (Exactly 18 chars: 2 letters + 16 digits)
    const prnPattern = /^[A-Z]{2}[0-9]{16}$/;

    if (!prnPattern.test(prn)) {
      setError(
        "PRN must be exactly 18 characters: 2 capital letters followed by 16 digits."
      );
      return;
    }

    // 🔴 Mobile validation (10 digits)
    const mobilePattern = /^[0-9]{10}$/;

    if (!mobilePattern.test(mobile)) {
      setError("Mobile number must be exactly 10 digits.");
      return;
    }

    console.log("Student Login:", studentData);
  };

  return (
    <div className="auth-page">
      <header className="auth-header">
        <h2>CamPass - Student Login</h2>
        <span
          className="theme-toggle"
          onClick={() =>
            setTheme(theme === "light" ? "dark" : "light")
          }
        >
          {theme === "light" ? "🌙" : "☀️"}
        </span>
      </header>

      <div className="auth-container">
        <form onSubmit={handleSubmit}>
          <h1>Student Login</h1>

          {error && <p className="form-error">{error}</p>}

          <input
            type="text"
            name="prn"
            placeholder="PRN Number"
            value={studentData.prn}
            onChange={handleChange}
            maxLength={18}
            required
          />

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={studentData.name}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={studentData.mobile}
            onChange={handleChange}
            maxLength={10}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>

      {/* FOOTER */}
        <footer className="dashboard-footer">
        <div className="footer-content">
            <h3 className="footer-title">Need Help ?</h3>

            <div className="contact-grid">

            <div className="contact-card">
                <i className="fa-solid fa-location-dot"></i>
                <h4>Address</h4>
                <p>
                VPMCOE, Thane,<br />
                Mumbai, Maharashtra, India
                </p>
                <div className="map-box small-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.1190147749567!2d72.9782751758081!3d19.19000344838254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b925fdf83cf5%3A0x7c39760b6d905bf1!2sVPM's%20Polytechnic%2C%20Thane!5e0!3m2!1sen!2sin!4v1772351604352!5m2!1sen!2sin"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                />
                </div>
            </div>

            <div className="contact-card">
                <i className="fa-solid fa-phone"></i>
                <h4>Office - Admin</h4>
                <p>(022)-25339872</p>
            </div>

            <div className="contact-card">
                <i className="fa-solid fa-envelope"></i>
                <h4>Email</h4>
                <p>vpmcoe@vpmthane.org</p>
            </div>

            <div className="contact-card">
                <i className="fa-solid fa-clock"></i>
                <h4>Office Hours</h4>
                <p>
                Mon – Fri<br />
                9:00 AM – 5:00 PM
                </p>
            </div>

            </div>
        </div>

        <div
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
            Back to top ↑
        </div>

        <div className="footer-bottom">
            © 2026 CamPass • Version 1.0
        </div>
        </footer>
    </div>
  );
}

export default StudentLogin;
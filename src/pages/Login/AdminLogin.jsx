import { useState, useEffect } from "react";
import "../styles/auth.css";
import "../styles/footer.css";

function AdminLogin() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Admin Login");
  };

  return (
    <div className="auth-page">
      <header className="auth-header">
        <h2>CamPass - Admin Login</h2>
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
          <h1>Admin Login</h1>

          <input
            type="email"
            placeholder="College Email"
            required
          />

          <input
            type="password"
            placeholder="Password"
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

export default AdminLogin;
import { useState, useRef, useEffect } from "react";
import "../styles/Components Files/navbar.css";

function Navbar({ toggleSidebar }) {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );
  const profileRef = useRef(null);

  // CLOSE DROPDOWN WHEN CLICKING OUTSIDE
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="top-header">
      {/* LEFT */}
      <div className="header-left">
        {/* ☰ HAMBURGER FIRST */}
        <span className="hamburger" onClick={toggleSidebar}>
          <i className="fa-solid fa-bars"></i>
        </span>

        {/* CamPass BRAND (MOBILE ONLY) */}
        <div className="header-brand">
          <i className="fa-solid fa-graduation-cap"></i>
          <span>CamPass</span>
        </div>

        {/* DESKTOP ONLY */}
        <span className="header-title">User Dashboard</span>
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
        <span className="header-divider"></span>

        <span className="icon">🔔</span>
        <span className="header-divider"></span>

        <span className="icon">✉️</span>
        <span className="header-divider"></span>

        <div
          className="profile-wrapper"
          ref={profileRef}
          onClick={() => setOpen(!open)}
        >
          <div className="profile-icon-circle">
            <i className="fa-solid fa-user"></i>
          </div>

          {open && (
            <div className="dropdown">
              <button className="logout-btn">Logout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/AdminDashboard/admin.css";

const NavbarAdmin = ({ theme, toggleTheme }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();

  // Close when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // 🔥 LOGOUT FUNCTION
  const handleLogout = () => {
    toast.success("Logged out successfully 👋");

    // Optional: clear admin token
    localStorage.removeItem("adminToken");

    setTimeout(() => {
      navigate("/admin-login");
    }, 2000);
  };

  return (
    <div className="admin-navbar">
      <div className="nav-left">
        <i className="fa-solid fa-school"></i>
        <span>Admin <span className="thin">Dashboard</span></span>
      </div>

      <div className="nav-right">
        <i className="fas fa-envelope"></i>
        <i className="fas fa-bell"></i>

        <div className="profile-container" ref={dropdownRef}>
          <div
            className="profile-toggle"
            onClick={() => setOpen(!open)}
          >
            <i className="fas fa-user-circle" style={{ fontSize: 28 }}></i>
            <i className="fas fa-chevron-down small-arrow"></i>
          </div>

          {open && (
            <div className="profile-dropdown">
              <div className="dropdown-header">
                <i className="fas fa-user-circle"></i>
                <span>Admin</span>
              </div>

              {/* 🔥 ADDED onClick */}
              <div
                className="dropdown-item logout"
                onClick={handleLogout}
              >
                <i className="fas fa-sign-out-alt"></i>
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarAdmin;
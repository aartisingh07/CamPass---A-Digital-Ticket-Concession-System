import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Components Files/sidebar.css";

function Sidebar({ closeSidebar }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (window.innerWidth <= 768) {
      closeSidebar();
    }
  };

  return (
    <div className="sidebar">

      {/* LOGO */}
      <div className="sidebar-header">
        <i className="fa-solid fa-graduation-cap sidebar-logo-icon"></i>
        <span className="sidebar-title">CamPass</span>
      </div>

      {/* MENU */}
      <ul className="sidebar-menu">

        <NavLink to="/dashboard" end onClick={handleClick}>
          <li>
            <i className="fa-solid fa-table-columns"></i>
            <span>Dashboard</span>
          </li>
        </NavLink>

        <NavLink to="/dashboard/apply" onClick={handleClick}>
          <li>
            <i className="fa-solid fa-file-signature"></i>
            <span>Apply for Concession</span>
          </li>
        </NavLink>

        <NavLink to="/dashboard/upload" onClick={handleClick}>
          <li>
            <i className="fa-solid fa-upload"></i>
            <span>Upload Documents</span>
          </li>
        </NavLink>

        <NavLink to="/dashboard/profile" onClick={handleClick}>
          <li>
            <i className="fa-solid fa-user"></i>
            <span>Profile Details</span>
          </li>
        </NavLink>

        <NavLink to="/dashboard/concession" onClick={handleClick}>
          <li>
            <i className="fa-solid fa-id-card"></i>
            <span>My Concession</span>
          </li>
        </NavLink>

      </ul>

      {/* BACK TO HOME */}
      <div className="sidebar-bottom">
        <button
          className="back-home-btn"
          onClick={() => {
            localStorage.removeItem("student"); // clear session
            navigate("/", { replace: true });
          }}
        >
          <i className="fa-solid fa-arrow-left"></i>
          Back to Home
        </button>
      </div>

    </div>
  );
}

export default Sidebar;
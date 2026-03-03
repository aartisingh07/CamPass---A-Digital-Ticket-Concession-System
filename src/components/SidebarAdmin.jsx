import React from "react";
import "../styles/AdminDashboard/admin.css";

import { Link } from "react-router-dom";

const SidebarAdmin = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <i className="fa-solid fa-graduation-cap"></i>
        <h2>CamPass</h2>
      </div>
      <ul>
        <li>
          <Link to="/admin-dashboard">
            <i className="fas fa-chart-line"></i>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/admin-dashboard/students">
            <i className="fas fa-check-circle"></i>
            Students List
          </Link>
        </li>
        <li>
          <Link to="/admin-dashboard/academic-cycle">
            <i className="fas fa-layer-group"></i>
            Academic Cycle Management
          </Link>
        </li>
        <li>
          <Link to="/admin-dashboard/reports">
            <i className="fas fa-file-alt"></i>
            Academic Reports
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className="fas fa-home"></i>
            Home
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarAdmin;
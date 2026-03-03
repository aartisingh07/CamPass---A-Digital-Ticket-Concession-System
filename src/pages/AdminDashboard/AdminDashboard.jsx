import React from "react";
import { Outlet } from "react-router-dom";
import NavbarAdmin from "../../components/NavbarAdmin";
import SidebarAdmin from "../../components/SidebarAdmin";
import "../../styles/AdminDashboard/admin.css";

const AdminDashboard = () => {
  return (
    <div className="admin-layout">
      {/* SIDEBAR */}
      <SidebarAdmin />

      {/* RIGHT SIDE */}
      <div className="admin-main">
        {/* NAVBAR */}
        <NavbarAdmin />

        {/* THIS IS IMPORTANT */}
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
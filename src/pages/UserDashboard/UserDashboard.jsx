import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardCard from "../../components/DashboardCard";

function UserDashboard() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const navigate = useNavigate();

  const handleLogout = () => {
    // 1️⃣ Clear auth data (future proof)
    localStorage.removeItem("user");     // or token later
    localStorage.removeItem("role");

    // 2️⃣ Redirect to login page
    navigate("/login", { replace: true });
  };

  return (
    <>
      {/* LOGOUT BUTTON */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={handleLogout}
          style={{
            background: "#c0392b",
            color: "#fff",
            border: "none",
            padding: "8px 16px",
            borderRadius: "6px",
            cursor: "pointer",
            marginBottom: "10px"
          }}
        >
          Logout
        </button>
      </div>

      {/* DASHBOARD HOME */}
      {activeSection === "dashboard" && (
        <>
          <h2 className="welcome-text">Welcome, Student 👋</h2>

          <div className="dashboard-box">
            <div className="card-grid">
              <DashboardCard
                title="Apply for Railway Concession"
                image="/assets/train.png"
              />
              <DashboardCard
                title="Upload Documents"
                image="/assets/documents.png"
              />
              <DashboardCard
                title="Profile Details"
                image="/assets/profile.png"
              />
            </div>

            <div className="info-box">
              Please upload the required documents to proceed.
            </div>
          </div>
        </>
      )}

      {/* NOTIFICATIONS */}
      {activeSection === "notifications" && (
        <>
          <h2>Notifications</h2>
          <p>No new notifications yet.</p>
        </>
      )}

      {/* MY CONCESSION */}
      {activeSection === "concession" && (
        <>
          <h2>My Concession</h2>
          <p>Your concession status will appear here.</p>
        </>
      )}
    </>
  );
}

export default UserDashboard;
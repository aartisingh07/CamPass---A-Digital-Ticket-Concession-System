import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";

import DashboardLayout from "./layouts/DashboardLayout";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import UploadDocuments from "./pages/UserDashboard/UploadDocuments";

import StudentLogin from "./pages/Login/StudentLogin";
import AdminLogin from "./pages/Login/AdminLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* AUTH ROUTES */}
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* STUDENT DASHBOARD */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<UserDashboard />} />
          <Route path="upload" element={<UploadDocuments />} />
        </Route>

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
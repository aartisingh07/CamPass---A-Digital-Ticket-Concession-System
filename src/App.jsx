import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import UploadDocuments from "./pages/UploadDocuments";

import StudentLogin from "./pages/Login/StudentLogin";
import AdminLogin from "./pages/Login/AdminLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ROOT REDIRECT → Send to Home later */}
        <Route path="/" element={<Navigate to="/student-login" replace />} />

        {/* AUTH ROUTES */}
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* DASHBOARD (Student) */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<UserDashboard />} />
          <Route path="upload" element={<UploadDocuments />} />
        </Route>

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/student-login" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
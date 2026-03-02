import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import UserDashboard from "./pages/UserDashboard";
import UploadDocuments from "./pages/UploadDocuments";
import RegisterSlide from "./pages/RegisterSlide";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ✅ ROOT REDIRECT */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* ✅ LOGIN PAGE (OUTSIDE DASHBOARD) */}
        <Route path="/login" element={<RegisterSlide />} />

        {/* ✅ DASHBOARD LAYOUT */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<UserDashboard />} />
          <Route path="upload" element={<UploadDocuments />} />
        </Route>

        {/* ✅ FALLBACK */}
        <Route path="*" element={<Navigate to="/login" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
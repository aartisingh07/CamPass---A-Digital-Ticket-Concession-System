import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import UserDashboard from "./pages/UserDashboard";
import UploadDocuments from "./pages/UploadDocuments";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ✅ REDIRECT ROOT */}
        <Route path="/" element={<Navigate to="/dashboard" />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<UserDashboard />} />
          <Route path="upload" element={<UploadDocuments />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
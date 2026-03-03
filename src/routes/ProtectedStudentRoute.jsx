import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedStudentRoute = ({ children }) => {
  const student = localStorage.getItem("student");

  if (!student) {
    toast.error("Please login first 🚫");
    return <Navigate to="/student-login" replace />;
  }

  return children;
};

export default ProtectedStudentRoute;
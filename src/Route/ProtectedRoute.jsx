import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProtectedRoute = ({ allowedRoles }) => {
  const userType = localStorage.getItem("userType");

  if (!userType || !allowedRoles.includes(userType)) {
    toast.error(`You can't access this route. It is only for ${allowedRoles.join(" or ")}.`, {
      position: "top-center",
      autoClose: 3000,
    });
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;





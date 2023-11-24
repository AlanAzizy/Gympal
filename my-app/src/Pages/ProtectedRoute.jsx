import { Navigate,useNavigate } from "react-router-dom";
import Cookies from 'js-cookies';
import Profile from "./Profile";
import Class from "./Class";
import Payment from "./Payment";
import Purchases from "./Purchases";


const ProtectedRoute = ({ children }) => {

  const token = Cookies.getItem("jwt");
  if (!token) {
      return <Navigate to="/" replace />;
    }
  return children;
};

export default ProtectedRoute;
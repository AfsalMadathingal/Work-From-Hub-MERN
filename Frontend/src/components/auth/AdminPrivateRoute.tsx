import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { validateAdminSession } from "../../services/adminService";
import { logout } from "../../services/adminAuth";
import { resetAdmin } from "../../redux/slices/adminSlice";
import toast from "react-hot-toast";

interface PrivateRouteProps {
  element: React.ComponentType; 
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element: Element }) => {

  const navigate =  useNavigate();
  const dispatch = useDispatch();
  const validateSession = async () => {
    const response = await validateAdminSession();
    if(response.status === 200){
      return;
    }

    if(response.status === 401){
      await logout();
      dispatch(resetAdmin());
      navigate("/admin/login");
      toast.error("Session expired Please login again");
    }
  }


  useEffect(() => {

validateSession();

  }, []);

  const { isAuthenticated } = useSelector((state: RootState) => state.admin);




  return isAuthenticated ? <Element /> : <Navigate to="/admin/login" />;
  
};

export default PrivateRoute;

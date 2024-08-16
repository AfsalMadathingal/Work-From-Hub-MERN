import React from "react";
import { Navigate } from "react-router-dom";
import { RootState } from "../../redux/store/store";
import { setLoading } from "../../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

interface PrivateRouteProps {
  element: React.ComponentType; 
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element: Element }) => {



  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  console.log(isAuthenticated);
  


  return isAuthenticated ? <Element /> : <Navigate to="/login" />;
  
};

export default PrivateRoute;

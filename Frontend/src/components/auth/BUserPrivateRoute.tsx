import React from "react";
import { Navigate } from "react-router-dom";
import { RootState } from "../../redux/store/store";
import { useSelector } from "react-redux";

interface PrivateRouteProps {
  element: React.ComponentType; 
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element: Element }) => {

  



  const { isAuthenticated } = useSelector((state: RootState) => state.businessUser);




  return isAuthenticated ? <Element /> : <Navigate to="/business/login" />;
  
};

export default PrivateRoute;

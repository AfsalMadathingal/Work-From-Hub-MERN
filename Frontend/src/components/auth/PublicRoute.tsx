import React from "react";
import { Navigate } from "react-router-dom";
import { RootState } from "../../redux/store/store";
import { useSelector } from "react-redux";


interface PublicRouteProps {
  element: React.ComponentType; 
}

const PublicRoute: React.FC<PublicRouteProps> = ({ element: Element }) => {



  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  console.log(isAuthenticated);
  


  return isAuthenticated ? <Navigate to="/u/home" /> : <Element/> ;
  
};

export default PublicRoute;

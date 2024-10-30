import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store/store";
import { resetUser, setIsAuthenticated, setLoading } from "../../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../services/UserAuthService";
import toast from "react-hot-toast";
import { validateUserSession } from "../../services/userServices";

interface PrivateRouteProps {
  element: React.ComponentType; 
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element: Element }) => {

  const navigate =  useNavigate();
  const dispatch = useDispatch();

  const validateSession = async () => {

    try {
      const response = await validateUserSession();


    if(response.status === 200){
      return;
    }

    ;
    

    if(response.status === 401){
      ;
      
      await logout();
      dispatch(resetUser());
      navigate("/login");
    }
      
    } catch (error) {
      
      ;
      await logout();
      dispatch(resetUser());
      navigate("/login");

      
    }
    
  }


  useEffect(() => {

validateSession();

  }, []);

  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  ;
  


  return isAuthenticated ? <Element /> : <Navigate to="/login" />;
  
};

export default PrivateRoute;

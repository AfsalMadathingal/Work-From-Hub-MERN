import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store/store";
import { resetUser} from "../../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../services/UserAuthService";
import { validateUserSession } from "../../services/userServices";

interface PrivateRouteProps {
  element: React.ComponentType; 
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element: Element }) => {

  const navigate =  useNavigate();
  const dispatch = useDispatch();




  useEffect(() => {
    const validateSession = async () => {

      try {
        const response = await validateUserSession();
  
  
      if(response?.status === 200){
        return;
      }
  
      ;
      
  
      if(response?.status === 401){
    
        
        await logout();
        dispatch(resetUser());
        navigate("/login");
      }
        
      } catch (error) {
        
        console.log(error);
        await logout();
        dispatch(resetUser());
        navigate("/login");
  
        
      }
      
    }
validateSession();

  }, [dispatch, navigate]);

  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  ;
  


  return isAuthenticated ? <Element /> : <Navigate to="/login" />;
  
};

export default PrivateRoute;
